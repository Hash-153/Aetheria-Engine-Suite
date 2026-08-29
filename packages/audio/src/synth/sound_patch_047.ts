// Audio Synthesizer Sound Patch #047
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_47 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_47: SoundPresetConfig_47 = {
  id: 'synth_patch_047',
  baseFrequency: 925,
  modFrequency: 1380,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_47(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_47.baseFrequency, 0.25, SOUND_CONFIG_47.oscillatorType, 0.3);
}
