// Audio Synthesizer Sound Patch #097
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_97 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_97: SoundPresetConfig_97 = {
  id: 'synth_patch_097',
  baseFrequency: 795,
  modFrequency: 620,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_97(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_97.baseFrequency, 0.25, SOUND_CONFIG_97.oscillatorType, 0.3);
}
