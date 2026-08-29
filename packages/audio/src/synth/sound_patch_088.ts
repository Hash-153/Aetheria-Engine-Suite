// Audio Synthesizer Sound Patch #088
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_88 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_88: SoundPresetConfig_88 = {
  id: 'synth_patch_088',
  baseFrequency: 660,
  modFrequency: 440,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_88(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_88.baseFrequency, 0.25, SOUND_CONFIG_88.oscillatorType, 0.3);
}
