// Audio Synthesizer Sound Patch #142
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_142 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_142: SoundPresetConfig_142 = {
  id: 'synth_patch_142',
  baseFrequency: 590,
  modFrequency: 1520,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_142(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_142.baseFrequency, 0.25, SOUND_CONFIG_142.oscillatorType, 0.3);
}
