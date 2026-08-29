// Audio Synthesizer Sound Patch #044
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_44 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_44: SoundPresetConfig_44 = {
  id: 'synth_patch_044',
  baseFrequency: 880,
  modFrequency: 1320,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_44(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_44.baseFrequency, 0.25, SOUND_CONFIG_44.oscillatorType, 0.3);
}
