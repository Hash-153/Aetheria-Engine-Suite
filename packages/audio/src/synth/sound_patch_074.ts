// Audio Synthesizer Sound Patch #074
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_74 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_74: SoundPresetConfig_74 = {
  id: 'synth_patch_074',
  baseFrequency: 450,
  modFrequency: 1920,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_74(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_74.baseFrequency, 0.25, SOUND_CONFIG_74.oscillatorType, 0.3);
}
