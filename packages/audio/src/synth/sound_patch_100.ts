// Audio Synthesizer Sound Patch #100
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_100 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_100: SoundPresetConfig_100 = {
  id: 'synth_patch_100',
  baseFrequency: 840,
  modFrequency: 680,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_100(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_100.baseFrequency, 0.25, SOUND_CONFIG_100.oscillatorType, 0.3);
}
