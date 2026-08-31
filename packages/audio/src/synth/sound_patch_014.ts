// Audio Synthesizer Sound Patch #014
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_14 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_14: SoundPresetConfig_14 = {
  id: 'synth_patch_014',
  baseFrequency: 430,
  modFrequency: 720,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_14(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_14.baseFrequency, 0.25, SOUND_CONFIG_14.oscillatorType, 0.3);
}
