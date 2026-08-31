// Audio Synthesizer Sound Patch #092
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_92 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_92: SoundPresetConfig_92 = {
  id: 'synth_patch_092',
  baseFrequency: 720,
  modFrequency: 520,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_92(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_92.baseFrequency, 0.25, SOUND_CONFIG_92.oscillatorType, 0.3);
}
