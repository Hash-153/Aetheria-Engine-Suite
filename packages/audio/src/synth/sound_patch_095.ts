// Audio Synthesizer Sound Patch #095
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_95 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_95: SoundPresetConfig_95 = {
  id: 'synth_patch_095',
  baseFrequency: 765,
  modFrequency: 580,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_95(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_95.baseFrequency, 0.25, SOUND_CONFIG_95.oscillatorType, 0.3);
}
