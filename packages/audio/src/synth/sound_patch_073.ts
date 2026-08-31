// Audio Synthesizer Sound Patch #073
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_73 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_73: SoundPresetConfig_73 = {
  id: 'synth_patch_073',
  baseFrequency: 435,
  modFrequency: 1900,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_73(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_73.baseFrequency, 0.25, SOUND_CONFIG_73.oscillatorType, 0.3);
}
