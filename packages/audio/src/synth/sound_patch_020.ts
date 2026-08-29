// Audio Synthesizer Sound Patch #020
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_20 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_20: SoundPresetConfig_20 = {
  id: 'synth_patch_020',
  baseFrequency: 520,
  modFrequency: 840,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_20(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_20.baseFrequency, 0.25, SOUND_CONFIG_20.oscillatorType, 0.3);
}
