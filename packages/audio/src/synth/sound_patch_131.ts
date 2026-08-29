// Audio Synthesizer Sound Patch #131
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_131 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_131: SoundPresetConfig_131 = {
  id: 'synth_patch_131',
  baseFrequency: 425,
  modFrequency: 1300,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_131(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_131.baseFrequency, 0.25, SOUND_CONFIG_131.oscillatorType, 0.3);
}
