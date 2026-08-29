import { ProceduralAudioEngine } from './synth.js';

export class SoundFXPresets {
  public static playLevelUp(audio: ProceduralAudioEngine): void {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        audio.playTone(freq, 0.12, 'triangle', 0.3);
      }, idx * 70);
    });
  }

  public static playShieldDeflect(audio: ProceduralAudioEngine): void {
    audio.playTone(1200, 0.05, 'sawtooth', 0.25);
    setTimeout(() => {
      audio.playTone(800, 0.08, 'sine', 0.2);
    }, 30);
  }

  public static playTeleport(audio: ProceduralAudioEngine): void {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        audio.playTone(300 + i * 150, 0.06, 'sine', 0.15);
      }, i * 25);
    }
  }
}
