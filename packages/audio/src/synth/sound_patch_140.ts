// Audio Synthesizer Sound Patch #140
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_140 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_140: SoundPresetConfig_140 = {
  id: 'synth_patch_140',
  baseFrequency: 560,
  modFrequency: 1480,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_140(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_140.baseFrequency, 0.25, SOUND_CONFIG_140.oscillatorType, 0.3);
}
