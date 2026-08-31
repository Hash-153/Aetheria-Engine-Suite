// Audio Synthesizer Sound Patch #120
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_120 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_120: SoundPresetConfig_120 = {
  id: 'synth_patch_120',
  baseFrequency: 260,
  modFrequency: 1080,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_120(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_120.baseFrequency, 0.25, SOUND_CONFIG_120.oscillatorType, 0.3);
}
