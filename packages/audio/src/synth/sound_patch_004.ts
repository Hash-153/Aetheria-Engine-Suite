// Audio Synthesizer Sound Patch #004
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_4 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_4: SoundPresetConfig_4 = {
  id: 'synth_patch_004',
  baseFrequency: 280,
  modFrequency: 520,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_4(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_4.baseFrequency, 0.25, SOUND_CONFIG_4.oscillatorType, 0.3);
}
