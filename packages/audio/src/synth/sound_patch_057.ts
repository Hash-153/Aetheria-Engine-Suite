// Audio Synthesizer Sound Patch #057
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_57 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_57: SoundPresetConfig_57 = {
  id: 'synth_patch_057',
  baseFrequency: 1075,
  modFrequency: 1580,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_57(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_57.baseFrequency, 0.25, SOUND_CONFIG_57.oscillatorType, 0.3);
}
