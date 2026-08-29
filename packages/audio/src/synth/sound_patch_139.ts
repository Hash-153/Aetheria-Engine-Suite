// Audio Synthesizer Sound Patch #139
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_139 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_139: SoundPresetConfig_139 = {
  id: 'synth_patch_139',
  baseFrequency: 545,
  modFrequency: 1460,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_139(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_139.baseFrequency, 0.25, SOUND_CONFIG_139.oscillatorType, 0.3);
}
