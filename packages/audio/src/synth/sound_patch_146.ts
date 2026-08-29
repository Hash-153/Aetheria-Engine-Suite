// Audio Synthesizer Sound Patch #146
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_146 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_146: SoundPresetConfig_146 = {
  id: 'synth_patch_146',
  baseFrequency: 650,
  modFrequency: 1600,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_146(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_146.baseFrequency, 0.25, SOUND_CONFIG_146.oscillatorType, 0.3);
}
