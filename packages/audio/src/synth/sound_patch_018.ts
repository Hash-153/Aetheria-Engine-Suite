// Audio Synthesizer Sound Patch #018
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_18 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_18: SoundPresetConfig_18 = {
  id: 'synth_patch_018',
  baseFrequency: 490,
  modFrequency: 800,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_18(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_18.baseFrequency, 0.25, SOUND_CONFIG_18.oscillatorType, 0.3);
}
