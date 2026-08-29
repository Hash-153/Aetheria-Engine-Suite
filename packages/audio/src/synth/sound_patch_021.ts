// Audio Synthesizer Sound Patch #021
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_21 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_21: SoundPresetConfig_21 = {
  id: 'synth_patch_021',
  baseFrequency: 535,
  modFrequency: 860,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_21(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_21.baseFrequency, 0.25, SOUND_CONFIG_21.oscillatorType, 0.3);
}
