// Audio Synthesizer Sound Patch #048
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_48 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_48: SoundPresetConfig_48 = {
  id: 'synth_patch_048',
  baseFrequency: 940,
  modFrequency: 1400,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_48(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_48.baseFrequency, 0.25, SOUND_CONFIG_48.oscillatorType, 0.3);
}
