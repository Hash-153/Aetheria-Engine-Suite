// Audio Synthesizer Sound Patch #023
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_23 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_23: SoundPresetConfig_23 = {
  id: 'synth_patch_023',
  baseFrequency: 565,
  modFrequency: 900,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_23(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_23.baseFrequency, 0.25, SOUND_CONFIG_23.oscillatorType, 0.3);
}
