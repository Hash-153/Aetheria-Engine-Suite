// Audio Synthesizer Sound Patch #087
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_87 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_87: SoundPresetConfig_87 = {
  id: 'synth_patch_087',
  baseFrequency: 645,
  modFrequency: 2180,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_87(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_87.baseFrequency, 0.25, SOUND_CONFIG_87.oscillatorType, 0.3);
}
