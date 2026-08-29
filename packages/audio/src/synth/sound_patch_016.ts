// Audio Synthesizer Sound Patch #016
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_16 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_16: SoundPresetConfig_16 = {
  id: 'synth_patch_016',
  baseFrequency: 460,
  modFrequency: 760,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_16(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_16.baseFrequency, 0.25, SOUND_CONFIG_16.oscillatorType, 0.3);
}
