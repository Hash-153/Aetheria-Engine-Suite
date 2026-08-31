// Audio Synthesizer Sound Patch #019
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_19 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_19: SoundPresetConfig_19 = {
  id: 'synth_patch_019',
  baseFrequency: 505,
  modFrequency: 820,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_19(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_19.baseFrequency, 0.25, SOUND_CONFIG_19.oscillatorType, 0.3);
}
