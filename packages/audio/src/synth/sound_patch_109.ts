// Audio Synthesizer Sound Patch #109
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_109 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_109: SoundPresetConfig_109 = {
  id: 'synth_patch_109',
  baseFrequency: 975,
  modFrequency: 860,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_109(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_109.baseFrequency, 0.25, SOUND_CONFIG_109.oscillatorType, 0.3);
}
