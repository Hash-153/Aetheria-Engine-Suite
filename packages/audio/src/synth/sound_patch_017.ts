// Audio Synthesizer Sound Patch #017
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_17 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_17: SoundPresetConfig_17 = {
  id: 'synth_patch_017',
  baseFrequency: 475,
  modFrequency: 780,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_17(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_17.baseFrequency, 0.25, SOUND_CONFIG_17.oscillatorType, 0.3);
}
