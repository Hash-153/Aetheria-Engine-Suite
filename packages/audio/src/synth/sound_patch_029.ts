// Audio Synthesizer Sound Patch #029
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_29 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_29: SoundPresetConfig_29 = {
  id: 'synth_patch_029',
  baseFrequency: 655,
  modFrequency: 1020,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_29(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_29.baseFrequency, 0.25, SOUND_CONFIG_29.oscillatorType, 0.3);
}
