// Audio Synthesizer Sound Patch #061
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_61 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_61: SoundPresetConfig_61 = {
  id: 'synth_patch_061',
  baseFrequency: 255,
  modFrequency: 1660,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_61(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_61.baseFrequency, 0.25, SOUND_CONFIG_61.oscillatorType, 0.3);
}
