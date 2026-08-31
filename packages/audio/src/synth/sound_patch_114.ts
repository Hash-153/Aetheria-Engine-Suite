// Audio Synthesizer Sound Patch #114
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_114 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_114: SoundPresetConfig_114 = {
  id: 'synth_patch_114',
  baseFrequency: 1050,
  modFrequency: 960,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_114(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_114.baseFrequency, 0.25, SOUND_CONFIG_114.oscillatorType, 0.3);
}
