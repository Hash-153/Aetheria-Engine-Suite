// Audio Synthesizer Sound Patch #132
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_132 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_132: SoundPresetConfig_132 = {
  id: 'synth_patch_132',
  baseFrequency: 440,
  modFrequency: 1320,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_132(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_132.baseFrequency, 0.25, SOUND_CONFIG_132.oscillatorType, 0.3);
}
