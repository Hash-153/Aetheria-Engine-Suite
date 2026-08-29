// Audio Synthesizer Sound Patch #050
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_50 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_50: SoundPresetConfig_50 = {
  id: 'synth_patch_050',
  baseFrequency: 970,
  modFrequency: 1440,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_50(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_50.baseFrequency, 0.25, SOUND_CONFIG_50.oscillatorType, 0.3);
}
