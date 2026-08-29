// Audio Synthesizer Sound Patch #125
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_125 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_125: SoundPresetConfig_125 = {
  id: 'synth_patch_125',
  baseFrequency: 335,
  modFrequency: 1180,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_125(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_125.baseFrequency, 0.25, SOUND_CONFIG_125.oscillatorType, 0.3);
}
