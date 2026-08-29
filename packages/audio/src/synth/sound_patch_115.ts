// Audio Synthesizer Sound Patch #115
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_115 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_115: SoundPresetConfig_115 = {
  id: 'synth_patch_115',
  baseFrequency: 1065,
  modFrequency: 980,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_115(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_115.baseFrequency, 0.25, SOUND_CONFIG_115.oscillatorType, 0.3);
}
