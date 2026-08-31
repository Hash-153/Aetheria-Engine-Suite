// Audio Synthesizer Sound Patch #024
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_24 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_24: SoundPresetConfig_24 = {
  id: 'synth_patch_024',
  baseFrequency: 580,
  modFrequency: 920,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_24(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_24.baseFrequency, 0.25, SOUND_CONFIG_24.oscillatorType, 0.3);
}
