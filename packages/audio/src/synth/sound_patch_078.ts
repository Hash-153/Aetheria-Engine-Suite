// Audio Synthesizer Sound Patch #078
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_78 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_78: SoundPresetConfig_78 = {
  id: 'synth_patch_078',
  baseFrequency: 510,
  modFrequency: 2000,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_78(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_78.baseFrequency, 0.25, SOUND_CONFIG_78.oscillatorType, 0.3);
}
