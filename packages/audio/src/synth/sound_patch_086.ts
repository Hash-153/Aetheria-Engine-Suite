// Audio Synthesizer Sound Patch #086
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_86 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_86: SoundPresetConfig_86 = {
  id: 'synth_patch_086',
  baseFrequency: 630,
  modFrequency: 2160,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_86(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_86.baseFrequency, 0.25, SOUND_CONFIG_86.oscillatorType, 0.3);
}
