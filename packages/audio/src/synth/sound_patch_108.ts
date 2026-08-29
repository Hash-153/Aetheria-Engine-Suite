// Audio Synthesizer Sound Patch #108
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_108 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_108: SoundPresetConfig_108 = {
  id: 'synth_patch_108',
  baseFrequency: 960,
  modFrequency: 840,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_108(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_108.baseFrequency, 0.25, SOUND_CONFIG_108.oscillatorType, 0.3);
}
