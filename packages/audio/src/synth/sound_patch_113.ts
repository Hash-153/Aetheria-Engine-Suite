// Audio Synthesizer Sound Patch #113
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_113 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_113: SoundPresetConfig_113 = {
  id: 'synth_patch_113',
  baseFrequency: 1035,
  modFrequency: 940,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_113(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_113.baseFrequency, 0.25, SOUND_CONFIG_113.oscillatorType, 0.3);
}
