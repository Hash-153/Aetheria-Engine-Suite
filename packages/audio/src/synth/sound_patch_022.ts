// Audio Synthesizer Sound Patch #022
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_22 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_22: SoundPresetConfig_22 = {
  id: 'synth_patch_022',
  baseFrequency: 550,
  modFrequency: 880,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_22(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_22.baseFrequency, 0.25, SOUND_CONFIG_22.oscillatorType, 0.3);
}
