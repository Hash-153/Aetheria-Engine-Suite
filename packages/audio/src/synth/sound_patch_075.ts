// Audio Synthesizer Sound Patch #075
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_75 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_75: SoundPresetConfig_75 = {
  id: 'synth_patch_075',
  baseFrequency: 465,
  modFrequency: 1940,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_75(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_75.baseFrequency, 0.25, SOUND_CONFIG_75.oscillatorType, 0.3);
}
