// Audio Synthesizer Sound Patch #007
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_7 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_7: SoundPresetConfig_7 = {
  id: 'synth_patch_007',
  baseFrequency: 325,
  modFrequency: 580,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_7(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_7.baseFrequency, 0.25, SOUND_CONFIG_7.oscillatorType, 0.3);
}
