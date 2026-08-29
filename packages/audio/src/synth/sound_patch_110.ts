// Audio Synthesizer Sound Patch #110
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_110 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_110: SoundPresetConfig_110 = {
  id: 'synth_patch_110',
  baseFrequency: 990,
  modFrequency: 880,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_110(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_110.baseFrequency, 0.25, SOUND_CONFIG_110.oscillatorType, 0.3);
}
