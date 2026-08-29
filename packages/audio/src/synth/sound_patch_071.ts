// Audio Synthesizer Sound Patch #071
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_71 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_71: SoundPresetConfig_71 = {
  id: 'synth_patch_071',
  baseFrequency: 405,
  modFrequency: 1860,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_71(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_71.baseFrequency, 0.25, SOUND_CONFIG_71.oscillatorType, 0.3);
}
