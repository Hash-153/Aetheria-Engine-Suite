// Audio Synthesizer Sound Patch #002
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_2 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_2: SoundPresetConfig_2 = {
  id: 'synth_patch_002',
  baseFrequency: 250,
  modFrequency: 480,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_2(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_2.baseFrequency, 0.25, SOUND_CONFIG_2.oscillatorType, 0.3);
}
