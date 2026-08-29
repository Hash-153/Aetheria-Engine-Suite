// Audio Synthesizer Sound Patch #065
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_65 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_65: SoundPresetConfig_65 = {
  id: 'synth_patch_065',
  baseFrequency: 315,
  modFrequency: 1740,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_65(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_65.baseFrequency, 0.25, SOUND_CONFIG_65.oscillatorType, 0.3);
}
