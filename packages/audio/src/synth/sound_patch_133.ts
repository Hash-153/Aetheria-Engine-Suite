// Audio Synthesizer Sound Patch #133
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_133 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_133: SoundPresetConfig_133 = {
  id: 'synth_patch_133',
  baseFrequency: 455,
  modFrequency: 1340,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_133(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_133.baseFrequency, 0.25, SOUND_CONFIG_133.oscillatorType, 0.3);
}
