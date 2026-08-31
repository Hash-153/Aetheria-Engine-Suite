// Audio Synthesizer Sound Patch #083
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_83 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_83: SoundPresetConfig_83 = {
  id: 'synth_patch_083',
  baseFrequency: 585,
  modFrequency: 2100,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_83(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_83.baseFrequency, 0.25, SOUND_CONFIG_83.oscillatorType, 0.3);
}
