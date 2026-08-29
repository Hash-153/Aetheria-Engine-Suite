// Audio Synthesizer Sound Patch #003
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_3 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_3: SoundPresetConfig_3 = {
  id: 'synth_patch_003',
  baseFrequency: 265,
  modFrequency: 500,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_3(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_3.baseFrequency, 0.25, SOUND_CONFIG_3.oscillatorType, 0.3);
}
