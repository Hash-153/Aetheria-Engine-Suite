// Audio Synthesizer Sound Patch #056
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_56 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_56: SoundPresetConfig_56 = {
  id: 'synth_patch_056',
  baseFrequency: 1060,
  modFrequency: 1560,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_56(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_56.baseFrequency, 0.25, SOUND_CONFIG_56.oscillatorType, 0.3);
}
