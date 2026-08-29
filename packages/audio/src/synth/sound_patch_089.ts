// Audio Synthesizer Sound Patch #089
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_89 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_89: SoundPresetConfig_89 = {
  id: 'synth_patch_089',
  baseFrequency: 675,
  modFrequency: 460,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_89(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_89.baseFrequency, 0.25, SOUND_CONFIG_89.oscillatorType, 0.3);
}
