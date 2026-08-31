// Audio Synthesizer Sound Patch #013
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_13 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_13: SoundPresetConfig_13 = {
  id: 'synth_patch_013',
  baseFrequency: 415,
  modFrequency: 700,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_13(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_13.baseFrequency, 0.25, SOUND_CONFIG_13.oscillatorType, 0.3);
}
