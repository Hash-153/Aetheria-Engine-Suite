// Audio Synthesizer Sound Patch #093
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_93 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_93: SoundPresetConfig_93 = {
  id: 'synth_patch_093',
  baseFrequency: 735,
  modFrequency: 540,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_93(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_93.baseFrequency, 0.25, SOUND_CONFIG_93.oscillatorType, 0.3);
}
