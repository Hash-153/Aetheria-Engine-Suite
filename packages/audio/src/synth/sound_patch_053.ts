// Audio Synthesizer Sound Patch #053
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_53 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_53: SoundPresetConfig_53 = {
  id: 'synth_patch_053',
  baseFrequency: 1015,
  modFrequency: 1500,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_53(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_53.baseFrequency, 0.25, SOUND_CONFIG_53.oscillatorType, 0.3);
}
