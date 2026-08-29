// Audio Synthesizer Sound Patch #147
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_147 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_147: SoundPresetConfig_147 = {
  id: 'synth_patch_147',
  baseFrequency: 665,
  modFrequency: 1620,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_147(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_147.baseFrequency, 0.25, SOUND_CONFIG_147.oscillatorType, 0.3);
}
