import { Vec2, AABB2D } from '../../math/src/index.js';

export enum BodyType {
  Static = 0,
  Kinematic = 1,
  Dynamic = 2
}

export class RigidBody2D {
  public id: number;
  public type: BodyType;
  public position: Vec2;
  public velocity: Vec2;
  public force: Vec2;

  public rotation: number = 0; // radians
  public angularVelocity: number = 0;
  public torque: number = 0;

  public mass: number = 1.0;
  public invMass: number = 1.0;
  public inertia: number = 1.0;
  public invInertia: number = 1.0;

  public restitution: number = 0.2; // bounciness
  public staticFriction: number = 0.5;
  public dynamicFriction: number = 0.3;
  public linearDamping: number = 0.01;
  public angularDamping: number = 0.02;

  public width: number = 32;
  public height: number = 32;
  public radius: number = 16;
  public isCircle: boolean = false;

  constructor(id: number, type = BodyType.Dynamic, position = new Vec2()) {
    this.id = id;
    this.type = type;
    this.position = position.clone();
    this.velocity = new Vec2();
    this.force = new Vec2();

    this.setMass(type === BodyType.Static ? 0 : 1.0);
  }

  public setMass(mass: number): this {
    this.mass = mass;
    if (mass > 0) {
      this.invMass = 1.0 / mass;
      this.inertia = (1.0 / 12.0) * mass * (this.width * this.width + this.height * this.height);
      this.invInertia = 1.0 / (this.inertia || 1e-8);
    } else {
      this.invMass = 0;
      this.inertia = 0;
      this.invInertia = 0;
    }
    return this;
  }

  public applyForce(f: Vec2): void {
    if (this.type !== BodyType.Dynamic) return;
    this.force.add(f);
  }

  public applyImpulse(impulse: Vec2, contactVector?: Vec2): void {
    if (this.type !== BodyType.Dynamic) return;
    this.velocity.x += impulse.x * this.invMass;
    this.velocity.y += impulse.y * this.invMass;

    if (contactVector) {
      this.angularVelocity += contactVector.cross(impulse) * this.invInertia;
    }
  }

  public getAABB(out = new AABB2D()): AABB2D {
    const hw = this.isCircle ? this.radius : this.width * 0.5;
    const hh = this.isCircle ? this.radius : this.height * 0.5;
    return out.set(
      this.position.x - hw,
      this.position.y - hh,
      this.position.x + hw,
      this.position.y + hh
    );
  }

  public integrate(dt: number, gravity: Vec2): void {
    if (this.type !== BodyType.Dynamic) return;

    // Linear integration
    this.velocity.x += (this.force.x * this.invMass + gravity.x) * dt;
    this.velocity.y += (this.force.y * this.invMass + gravity.y) * dt;
    this.velocity.scale(Math.max(0, 1.0 - this.linearDamping));

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;

    // Angular integration
    this.angularVelocity += this.torque * this.invInertia * dt;
    this.angularVelocity *= Math.max(0, 1.0 - this.angularDamping);
    this.rotation += this.angularVelocity * dt;

    // Reset accumulated forces
    this.force.set(0, 0);
    this.torque = 0;
  }
}
