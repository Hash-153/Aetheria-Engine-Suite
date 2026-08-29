// Audio Synthesizer Sound Patch #015
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_15 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_15: SoundPresetConfig_15 = {
  id: 'synth_patch_015',
  baseFrequency: 445,
  modFrequency: 740,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_15(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_15.baseFrequency, 0.25, SOUND_CONFIG_15.oscillatorType, 0.3);
}
