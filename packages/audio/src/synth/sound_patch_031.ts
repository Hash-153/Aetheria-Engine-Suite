// Audio Synthesizer Sound Patch #031
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_31 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_31: SoundPresetConfig_31 = {
  id: 'synth_patch_031',
  baseFrequency: 685,
  modFrequency: 1060,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_31(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_31.baseFrequency, 0.25, SOUND_CONFIG_31.oscillatorType, 0.3);
}
