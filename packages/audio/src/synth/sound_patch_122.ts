// Audio Synthesizer Sound Patch #122
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_122 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_122: SoundPresetConfig_122 = {
  id: 'synth_patch_122',
  baseFrequency: 290,
  modFrequency: 1120,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_122(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_122.baseFrequency, 0.25, SOUND_CONFIG_122.oscillatorType, 0.3);
}
