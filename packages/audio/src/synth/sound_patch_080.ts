// Audio Synthesizer Sound Patch #080
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_80 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_80: SoundPresetConfig_80 = {
  id: 'synth_patch_080',
  baseFrequency: 540,
  modFrequency: 2040,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_80(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_80.baseFrequency, 0.25, SOUND_CONFIG_80.oscillatorType, 0.3);
}
