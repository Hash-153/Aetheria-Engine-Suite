// Audio Synthesizer Sound Patch #098
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_98 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_98: SoundPresetConfig_98 = {
  id: 'synth_patch_098',
  baseFrequency: 810,
  modFrequency: 640,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_98(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_98.baseFrequency, 0.25, SOUND_CONFIG_98.oscillatorType, 0.3);
}
