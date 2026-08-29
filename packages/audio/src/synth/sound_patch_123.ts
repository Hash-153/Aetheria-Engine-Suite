// Audio Synthesizer Sound Patch #123
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_123 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_123: SoundPresetConfig_123 = {
  id: 'synth_patch_123',
  baseFrequency: 305,
  modFrequency: 1140,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_123(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_123.baseFrequency, 0.25, SOUND_CONFIG_123.oscillatorType, 0.3);
}
