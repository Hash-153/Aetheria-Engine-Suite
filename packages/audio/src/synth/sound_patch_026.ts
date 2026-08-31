// Audio Synthesizer Sound Patch #026
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_26 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_26: SoundPresetConfig_26 = {
  id: 'synth_patch_026',
  baseFrequency: 610,
  modFrequency: 960,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_26(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_26.baseFrequency, 0.25, SOUND_CONFIG_26.oscillatorType, 0.3);
}
