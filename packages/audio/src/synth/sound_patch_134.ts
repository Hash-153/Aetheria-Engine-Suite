// Audio Synthesizer Sound Patch #134
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_134 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_134: SoundPresetConfig_134 = {
  id: 'synth_patch_134',
  baseFrequency: 470,
  modFrequency: 1360,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_134(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_134.baseFrequency, 0.25, SOUND_CONFIG_134.oscillatorType, 0.3);
}
