// Audio Synthesizer Sound Patch #135
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_135 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_135: SoundPresetConfig_135 = {
  id: 'synth_patch_135',
  baseFrequency: 485,
  modFrequency: 1380,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_135(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_135.baseFrequency, 0.25, SOUND_CONFIG_135.oscillatorType, 0.3);
}
