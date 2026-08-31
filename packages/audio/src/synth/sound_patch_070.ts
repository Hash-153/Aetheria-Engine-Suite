// Audio Synthesizer Sound Patch #070
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_70 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_70: SoundPresetConfig_70 = {
  id: 'synth_patch_070',
  baseFrequency: 390,
  modFrequency: 1840,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_70(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_70.baseFrequency, 0.25, SOUND_CONFIG_70.oscillatorType, 0.3);
}
