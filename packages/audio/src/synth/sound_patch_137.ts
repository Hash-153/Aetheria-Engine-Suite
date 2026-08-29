// Audio Synthesizer Sound Patch #137
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_137 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_137: SoundPresetConfig_137 = {
  id: 'synth_patch_137',
  baseFrequency: 515,
  modFrequency: 1420,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_137(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_137.baseFrequency, 0.25, SOUND_CONFIG_137.oscillatorType, 0.3);
}
