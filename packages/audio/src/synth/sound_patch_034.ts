// Audio Synthesizer Sound Patch #034
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_34 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_34: SoundPresetConfig_34 = {
  id: 'synth_patch_034',
  baseFrequency: 730,
  modFrequency: 1120,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_34(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_34.baseFrequency, 0.25, SOUND_CONFIG_34.oscillatorType, 0.3);
}
