// Audio Synthesizer Sound Patch #011
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_11 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_11: SoundPresetConfig_11 = {
  id: 'synth_patch_011',
  baseFrequency: 385,
  modFrequency: 660,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_11(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_11.baseFrequency, 0.25, SOUND_CONFIG_11.oscillatorType, 0.3);
}
