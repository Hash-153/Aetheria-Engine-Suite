// Audio Synthesizer Sound Patch #005
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_5 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_5: SoundPresetConfig_5 = {
  id: 'synth_patch_005',
  baseFrequency: 295,
  modFrequency: 540,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_5(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_5.baseFrequency, 0.25, SOUND_CONFIG_5.oscillatorType, 0.3);
}
