// Audio Synthesizer Sound Patch #102
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_102 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_102: SoundPresetConfig_102 = {
  id: 'synth_patch_102',
  baseFrequency: 870,
  modFrequency: 720,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_102(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_102.baseFrequency, 0.25, SOUND_CONFIG_102.oscillatorType, 0.3);
}
