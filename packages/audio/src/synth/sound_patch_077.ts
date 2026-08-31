// Audio Synthesizer Sound Patch #077
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_77 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_77: SoundPresetConfig_77 = {
  id: 'synth_patch_077',
  baseFrequency: 495,
  modFrequency: 1980,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_77(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_77.baseFrequency, 0.25, SOUND_CONFIG_77.oscillatorType, 0.3);
}
