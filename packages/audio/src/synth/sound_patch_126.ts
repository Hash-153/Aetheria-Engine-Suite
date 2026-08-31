// Audio Synthesizer Sound Patch #126
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_126 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_126: SoundPresetConfig_126 = {
  id: 'synth_patch_126',
  baseFrequency: 350,
  modFrequency: 1200,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_126(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_126.baseFrequency, 0.25, SOUND_CONFIG_126.oscillatorType, 0.3);
}
