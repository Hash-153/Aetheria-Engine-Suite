// Audio Synthesizer Sound Patch #106
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_106 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_106: SoundPresetConfig_106 = {
  id: 'synth_patch_106',
  baseFrequency: 930,
  modFrequency: 800,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_106(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_106.baseFrequency, 0.25, SOUND_CONFIG_106.oscillatorType, 0.3);
}
