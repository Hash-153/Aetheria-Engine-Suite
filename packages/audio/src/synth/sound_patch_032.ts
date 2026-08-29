// Audio Synthesizer Sound Patch #032
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_32 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_32: SoundPresetConfig_32 = {
  id: 'synth_patch_032',
  baseFrequency: 700,
  modFrequency: 1080,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_32(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_32.baseFrequency, 0.25, SOUND_CONFIG_32.oscillatorType, 0.3);
}
