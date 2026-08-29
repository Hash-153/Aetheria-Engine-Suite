// Audio Synthesizer Sound Patch #130
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_130 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_130: SoundPresetConfig_130 = {
  id: 'synth_patch_130',
  baseFrequency: 410,
  modFrequency: 1280,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_130(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_130.baseFrequency, 0.25, SOUND_CONFIG_130.oscillatorType, 0.3);
}
