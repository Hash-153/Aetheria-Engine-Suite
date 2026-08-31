// Audio Synthesizer Sound Patch #043
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_43 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_43: SoundPresetConfig_43 = {
  id: 'synth_patch_043',
  baseFrequency: 865,
  modFrequency: 1300,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_43(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_43.baseFrequency, 0.25, SOUND_CONFIG_43.oscillatorType, 0.3);
}
