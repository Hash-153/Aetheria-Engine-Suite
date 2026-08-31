// Audio Synthesizer Sound Patch #129
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_129 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_129: SoundPresetConfig_129 = {
  id: 'synth_patch_129',
  baseFrequency: 395,
  modFrequency: 1260,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_129(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_129.baseFrequency, 0.25, SOUND_CONFIG_129.oscillatorType, 0.3);
}
