// Audio Synthesizer Sound Patch #141
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_141 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_141: SoundPresetConfig_141 = {
  id: 'synth_patch_141',
  baseFrequency: 575,
  modFrequency: 1500,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_141(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_141.baseFrequency, 0.25, SOUND_CONFIG_141.oscillatorType, 0.3);
}
