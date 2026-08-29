// Audio Synthesizer Sound Patch #127
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_127 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_127: SoundPresetConfig_127 = {
  id: 'synth_patch_127',
  baseFrequency: 365,
  modFrequency: 1220,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_127(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_127.baseFrequency, 0.25, SOUND_CONFIG_127.oscillatorType, 0.3);
}
