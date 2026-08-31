// Audio Synthesizer Sound Patch #116
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_116 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_116: SoundPresetConfig_116 = {
  id: 'synth_patch_116',
  baseFrequency: 1080,
  modFrequency: 1000,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_116(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_116.baseFrequency, 0.25, SOUND_CONFIG_116.oscillatorType, 0.3);
}
