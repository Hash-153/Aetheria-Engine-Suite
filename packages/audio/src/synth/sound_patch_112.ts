// Audio Synthesizer Sound Patch #112
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_112 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_112: SoundPresetConfig_112 = {
  id: 'synth_patch_112',
  baseFrequency: 1020,
  modFrequency: 920,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_112(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_112.baseFrequency, 0.25, SOUND_CONFIG_112.oscillatorType, 0.3);
}
