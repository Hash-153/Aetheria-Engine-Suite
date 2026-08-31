import { ProceduralAudioEngine } from './synth.js';

export interface NoteEvent {
  note: string; // e.g. "C4", "E4", "G4"
  duration: number; // in steps
  instrument: string;
}

export interface Pattern {
  tracks: (NoteEvent | null)[][];
}

export class MusicTracker {
  private audio: ProceduralAudioEngine;
  public bpm: number = 120;
  public patterns: Pattern[] = [];
  public currentStep: number = 0;
  public isPlaying: boolean = false;
  private intervalId: any = null;

  constructor(audio: ProceduralAudioEngine) {
    this.audio = audio;
  }

  public static noteToFreq(note: string): number {
    const notes: { [k: string]: number } = {
      'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
      'G4': 392.00, 'A4': 440.00, 'B4': 493.88, 'C5': 523.25
    };
    return notes[note] || 440;
  }

  public play(): void {
    if (this.isPlaying) return;
    this.isPlaying = true;
    const stepDurationMs = (60 / this.bpm / 4) * 1000;

    this.intervalId = setInterval(() => {
      this.step();
    }, stepDurationMs);
  }

  public stop(): void {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private step(): void {
    // Process step events across channels
    this.currentStep++;
  }
}
