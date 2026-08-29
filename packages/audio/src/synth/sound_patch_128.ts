// Audio Synthesizer Sound Patch #128
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_128 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_128: SoundPresetConfig_128 = {
  id: 'synth_patch_128',
  baseFrequency: 380,
  modFrequency: 1240,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_128(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_128.baseFrequency, 0.25, SOUND_CONFIG_128.oscillatorType, 0.3);
}
