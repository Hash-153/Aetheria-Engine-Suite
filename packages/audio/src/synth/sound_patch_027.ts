// Audio Synthesizer Sound Patch #027
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_27 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_27: SoundPresetConfig_27 = {
  id: 'synth_patch_027',
  baseFrequency: 625,
  modFrequency: 980,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_27(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_27.baseFrequency, 0.25, SOUND_CONFIG_27.oscillatorType, 0.3);
}
