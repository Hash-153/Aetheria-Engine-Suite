// Audio Synthesizer Sound Patch #138
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_138 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_138: SoundPresetConfig_138 = {
  id: 'synth_patch_138',
  baseFrequency: 530,
  modFrequency: 1440,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_138(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_138.baseFrequency, 0.25, SOUND_CONFIG_138.oscillatorType, 0.3);
}
