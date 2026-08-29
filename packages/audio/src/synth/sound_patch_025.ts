// Audio Synthesizer Sound Patch #025
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_25 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_25: SoundPresetConfig_25 = {
  id: 'synth_patch_025',
  baseFrequency: 595,
  modFrequency: 940,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_25(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_25.baseFrequency, 0.25, SOUND_CONFIG_25.oscillatorType, 0.3);
}
