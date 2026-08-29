// Audio Synthesizer Sound Patch #054
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_54 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_54: SoundPresetConfig_54 = {
  id: 'synth_patch_054',
  baseFrequency: 1030,
  modFrequency: 1520,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_54(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_54.baseFrequency, 0.25, SOUND_CONFIG_54.oscillatorType, 0.3);
}
