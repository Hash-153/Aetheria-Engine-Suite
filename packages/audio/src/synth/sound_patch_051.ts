// Audio Synthesizer Sound Patch #051
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_51 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_51: SoundPresetConfig_51 = {
  id: 'synth_patch_051',
  baseFrequency: 985,
  modFrequency: 1460,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_51(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_51.baseFrequency, 0.25, SOUND_CONFIG_51.oscillatorType, 0.3);
}
