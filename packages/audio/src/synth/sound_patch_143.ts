// Audio Synthesizer Sound Patch #143
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_143 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_143: SoundPresetConfig_143 = {
  id: 'synth_patch_143',
  baseFrequency: 605,
  modFrequency: 1540,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_143(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_143.baseFrequency, 0.25, SOUND_CONFIG_143.oscillatorType, 0.3);
}
