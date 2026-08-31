// Audio Synthesizer Sound Patch #060
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_60 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_60: SoundPresetConfig_60 = {
  id: 'synth_patch_060',
  baseFrequency: 240,
  modFrequency: 1640,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_60(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_60.baseFrequency, 0.25, SOUND_CONFIG_60.oscillatorType, 0.3);
}
