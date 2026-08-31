// Audio Synthesizer Sound Patch #066
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_66 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_66: SoundPresetConfig_66 = {
  id: 'synth_patch_066',
  baseFrequency: 330,
  modFrequency: 1760,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_66(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_66.baseFrequency, 0.25, SOUND_CONFIG_66.oscillatorType, 0.3);
}
