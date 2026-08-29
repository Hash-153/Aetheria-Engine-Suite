// Audio Synthesizer Sound Patch #033
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_33 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_33: SoundPresetConfig_33 = {
  id: 'synth_patch_033',
  baseFrequency: 715,
  modFrequency: 1100,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_33(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_33.baseFrequency, 0.25, SOUND_CONFIG_33.oscillatorType, 0.3);
}
