// Audio Synthesizer Sound Patch #091
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_91 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_91: SoundPresetConfig_91 = {
  id: 'synth_patch_091',
  baseFrequency: 705,
  modFrequency: 500,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_91(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_91.baseFrequency, 0.25, SOUND_CONFIG_91.oscillatorType, 0.3);
}
