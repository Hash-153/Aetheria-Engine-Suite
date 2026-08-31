// Audio Synthesizer Sound Patch #145
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_145 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_145: SoundPresetConfig_145 = {
  id: 'synth_patch_145',
  baseFrequency: 635,
  modFrequency: 1580,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_145(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_145.baseFrequency, 0.25, SOUND_CONFIG_145.oscillatorType, 0.3);
}
