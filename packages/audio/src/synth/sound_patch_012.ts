// Audio Synthesizer Sound Patch #012
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_12 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_12: SoundPresetConfig_12 = {
  id: 'synth_patch_012',
  baseFrequency: 400,
  modFrequency: 680,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_12(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_12.baseFrequency, 0.25, SOUND_CONFIG_12.oscillatorType, 0.3);
}
