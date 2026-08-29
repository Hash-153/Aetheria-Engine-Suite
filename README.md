# 🎮 Aetheria Game Engine & Game Suite

Aetheria is an industrial-grade, high-performance modular TypeScript & WebGL2 game engine and complete game development suite featuring zero third-party framework dependencies.

---

## 📋 Prerequisites

Before running or building the project, ensure you have:
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge with WebGL2 support
- *(Optional)* **Docker**: For containerized deployment

---

## 📦 Dependencies

- **Runtime**: Zero external dependencies (pure custom linear algebra, custom physics solver, custom ECS, procedural WebAudio synth, custom WebGL2 renderer).
- **Development**:
  - `typescript` (^5.4.0)

---

## 🛠️ Installation

Clone the repository and install development dependencies:

```bash
# Clone the repository
git clone https://github.com/Hash-153/game-dev.git
cd game-dev

# Install dependencies
npm install
```

---

## 🔨 Build

Compile the entire TypeScript codebase into optimized ESM JavaScript modules:

```bash
# Build the TypeScript project
npm run build
```

---

## 🧪 Automated Tests & Benchmarks

Run the built-in regression test runner and performance benchmarks:

```bash
# Execute unit test suites
npm run test

# Execute performance benchmark suite (10,000 ECS entities & BVH collision tests)
npm run benchmark
```

---

## 🚀 Run & Usage

Start the local development server and launch the interactive games & engine sandbox:

```bash
# Start local dev server
npm start
```

Open your web browser and navigate to:
```
http://localhost:3000
```

### Docker Deployment

```bash
# Build Docker image
docker build -t aetheria-game-engine:latest .

# Run Docker container
docker run -d -p 3000:3000 aetheria-game-engine:latest
```

---

## 🕹️ Included Playable Games

1. **ChronoDungeon**: Procedural Rogue-like Action RPG with BSP dungeons, enemy A* pathfinding, inventory, spells, and loot tables.
2. **StellarVanguard**: 2D Tactical Space RTS & Tower Defense featuring swarm flocking physics, fleet doctrines, and energy economies.
3. **CyberRunner**: Precision Metroidvania Platformer with coyote time, jump buffering, wall sliding, cyber dash, and hazard systems.

---

## 📄 License

Proprietary Software. All rights reserved. (UNLICENSED)
