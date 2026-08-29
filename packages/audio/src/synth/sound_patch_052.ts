// Audio Synthesizer Sound Patch #052
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_52 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_52: SoundPresetConfig_52 = {
  id: 'synth_patch_052',
  baseFrequency: 1000,
  modFrequency: 1480,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_52(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_52.baseFrequency, 0.25, SOUND_CONFIG_52.oscillatorType, 0.3);
}
