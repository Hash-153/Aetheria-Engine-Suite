// Audio Synthesizer Sound Patch #090
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_90 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_90: SoundPresetConfig_90 = {
  id: 'synth_patch_090',
  baseFrequency: 690,
  modFrequency: 480,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_90(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_90.baseFrequency, 0.25, SOUND_CONFIG_90.oscillatorType, 0.3);
}
