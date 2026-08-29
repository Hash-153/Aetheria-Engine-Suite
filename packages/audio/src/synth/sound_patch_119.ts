// Audio Synthesizer Sound Patch #119
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_119 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_119: SoundPresetConfig_119 = {
  id: 'synth_patch_119',
  baseFrequency: 245,
  modFrequency: 1060,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_119(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_119.baseFrequency, 0.25, SOUND_CONFIG_119.oscillatorType, 0.3);
}
