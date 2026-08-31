// Audio Synthesizer Sound Patch #036
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_36 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_36: SoundPresetConfig_36 = {
  id: 'synth_patch_036',
  baseFrequency: 760,
  modFrequency: 1160,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_36(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_36.baseFrequency, 0.25, SOUND_CONFIG_36.oscillatorType, 0.3);
}
