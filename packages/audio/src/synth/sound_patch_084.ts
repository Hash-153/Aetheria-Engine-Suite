// Audio Synthesizer Sound Patch #084
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_84 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_84: SoundPresetConfig_84 = {
  id: 'synth_patch_084',
  baseFrequency: 600,
  modFrequency: 2120,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_84(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_84.baseFrequency, 0.25, SOUND_CONFIG_84.oscillatorType, 0.3);
}
