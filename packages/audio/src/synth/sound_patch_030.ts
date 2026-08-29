// Audio Synthesizer Sound Patch #030
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_30 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_30: SoundPresetConfig_30 = {
  id: 'synth_patch_030',
  baseFrequency: 670,
  modFrequency: 1040,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_30(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_30.baseFrequency, 0.25, SOUND_CONFIG_30.oscillatorType, 0.3);
}
