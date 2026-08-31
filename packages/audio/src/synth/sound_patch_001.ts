// Audio Synthesizer Sound Patch #001
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_1 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_1: SoundPresetConfig_1 = {
  id: 'synth_patch_001',
  baseFrequency: 235,
  modFrequency: 460,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_1(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_1.baseFrequency, 0.25, SOUND_CONFIG_1.oscillatorType, 0.3);
}
