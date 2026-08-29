// Audio Synthesizer Sound Patch #072
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_72 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_72: SoundPresetConfig_72 = {
  id: 'synth_patch_072',
  baseFrequency: 420,
  modFrequency: 1880,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_72(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_72.baseFrequency, 0.25, SOUND_CONFIG_72.oscillatorType, 0.3);
}
