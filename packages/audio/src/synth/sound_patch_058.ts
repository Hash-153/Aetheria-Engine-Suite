// Audio Synthesizer Sound Patch #058
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_58 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_58: SoundPresetConfig_58 = {
  id: 'synth_patch_058',
  baseFrequency: 1090,
  modFrequency: 1600,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_58(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_58.baseFrequency, 0.25, SOUND_CONFIG_58.oscillatorType, 0.3);
}
