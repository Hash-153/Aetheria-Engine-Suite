// Audio Synthesizer Sound Patch #082
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_82 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_82: SoundPresetConfig_82 = {
  id: 'synth_patch_082',
  baseFrequency: 570,
  modFrequency: 2080,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_82(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_82.baseFrequency, 0.25, SOUND_CONFIG_82.oscillatorType, 0.3);
}
