// Audio Synthesizer Sound Patch #094
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_94 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_94: SoundPresetConfig_94 = {
  id: 'synth_patch_094',
  baseFrequency: 750,
  modFrequency: 560,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_94(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_94.baseFrequency, 0.25, SOUND_CONFIG_94.oscillatorType, 0.3);
}
