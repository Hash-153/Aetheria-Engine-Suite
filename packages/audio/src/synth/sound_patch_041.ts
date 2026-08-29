// Audio Synthesizer Sound Patch #041
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_41 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_41: SoundPresetConfig_41 = {
  id: 'synth_patch_041',
  baseFrequency: 835,
  modFrequency: 1260,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_41(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_41.baseFrequency, 0.25, SOUND_CONFIG_41.oscillatorType, 0.3);
}
