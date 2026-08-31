// Audio Synthesizer Sound Patch #101
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_101 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_101: SoundPresetConfig_101 = {
  id: 'synth_patch_101',
  baseFrequency: 855,
  modFrequency: 700,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_101(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_101.baseFrequency, 0.25, SOUND_CONFIG_101.oscillatorType, 0.3);
}
