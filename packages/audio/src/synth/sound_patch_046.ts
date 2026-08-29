// Audio Synthesizer Sound Patch #046
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_46 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_46: SoundPresetConfig_46 = {
  id: 'synth_patch_046',
  baseFrequency: 910,
  modFrequency: 1360,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_46(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_46.baseFrequency, 0.25, SOUND_CONFIG_46.oscillatorType, 0.3);
}
