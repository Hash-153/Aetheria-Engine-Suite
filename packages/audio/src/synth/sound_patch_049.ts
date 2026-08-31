// Audio Synthesizer Sound Patch #049
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_49 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_49: SoundPresetConfig_49 = {
  id: 'synth_patch_049',
  baseFrequency: 955,
  modFrequency: 1420,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_49(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_49.baseFrequency, 0.25, SOUND_CONFIG_49.oscillatorType, 0.3);
}
