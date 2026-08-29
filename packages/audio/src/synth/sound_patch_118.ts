// Audio Synthesizer Sound Patch #118
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_118 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_118: SoundPresetConfig_118 = {
  id: 'synth_patch_118',
  baseFrequency: 230,
  modFrequency: 1040,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_118(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_118.baseFrequency, 0.25, SOUND_CONFIG_118.oscillatorType, 0.3);
}
