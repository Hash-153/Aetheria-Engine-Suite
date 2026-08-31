// Audio Synthesizer Sound Patch #028
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_28 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_28: SoundPresetConfig_28 = {
  id: 'synth_patch_028',
  baseFrequency: 640,
  modFrequency: 1000,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_28(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_28.baseFrequency, 0.25, SOUND_CONFIG_28.oscillatorType, 0.3);
}
