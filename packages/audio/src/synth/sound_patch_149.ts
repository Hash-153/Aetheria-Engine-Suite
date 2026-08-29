// Audio Synthesizer Sound Patch #149
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_149 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_149: SoundPresetConfig_149 = {
  id: 'synth_patch_149',
  baseFrequency: 695,
  modFrequency: 1660,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_149(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_149.baseFrequency, 0.25, SOUND_CONFIG_149.oscillatorType, 0.3);
}
