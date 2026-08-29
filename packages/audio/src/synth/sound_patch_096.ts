// Audio Synthesizer Sound Patch #096
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_96 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_96: SoundPresetConfig_96 = {
  id: 'synth_patch_096',
  baseFrequency: 780,
  modFrequency: 600,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_96(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_96.baseFrequency, 0.25, SOUND_CONFIG_96.oscillatorType, 0.3);
}
