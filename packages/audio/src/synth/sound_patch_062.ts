// Audio Synthesizer Sound Patch #062
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_62 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_62: SoundPresetConfig_62 = {
  id: 'synth_patch_062',
  baseFrequency: 270,
  modFrequency: 1680,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_62(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_62.baseFrequency, 0.25, SOUND_CONFIG_62.oscillatorType, 0.3);
}
