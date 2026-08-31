// Audio Synthesizer Sound Patch #150
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_150 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_150: SoundPresetConfig_150 = {
  id: 'synth_patch_150',
  baseFrequency: 710,
  modFrequency: 1680,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_150(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_150.baseFrequency, 0.25, SOUND_CONFIG_150.oscillatorType, 0.3);
}
