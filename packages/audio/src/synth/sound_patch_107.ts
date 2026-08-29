// Audio Synthesizer Sound Patch #107
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_107 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_107: SoundPresetConfig_107 = {
  id: 'synth_patch_107',
  baseFrequency: 945,
  modFrequency: 820,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_107(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_107.baseFrequency, 0.25, SOUND_CONFIG_107.oscillatorType, 0.3);
}
