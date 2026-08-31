// Audio Synthesizer Sound Patch #010
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_10 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_10: SoundPresetConfig_10 = {
  id: 'synth_patch_010',
  baseFrequency: 370,
  modFrequency: 640,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_10(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_10.baseFrequency, 0.25, SOUND_CONFIG_10.oscillatorType, 0.3);
}
