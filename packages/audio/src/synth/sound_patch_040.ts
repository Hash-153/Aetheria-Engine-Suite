// Audio Synthesizer Sound Patch #040
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_40 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_40: SoundPresetConfig_40 = {
  id: 'synth_patch_040',
  baseFrequency: 820,
  modFrequency: 1240,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_40(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_40.baseFrequency, 0.25, SOUND_CONFIG_40.oscillatorType, 0.3);
}
