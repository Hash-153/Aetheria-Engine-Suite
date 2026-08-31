// Audio Synthesizer Sound Patch #081
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_81 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_81: SoundPresetConfig_81 = {
  id: 'synth_patch_081',
  baseFrequency: 555,
  modFrequency: 2060,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_81(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_81.baseFrequency, 0.25, SOUND_CONFIG_81.oscillatorType, 0.3);
}
