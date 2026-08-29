// Audio Synthesizer Sound Patch #064
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_64 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_64: SoundPresetConfig_64 = {
  id: 'synth_patch_064',
  baseFrequency: 300,
  modFrequency: 1720,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_64(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_64.baseFrequency, 0.25, SOUND_CONFIG_64.oscillatorType, 0.3);
}
