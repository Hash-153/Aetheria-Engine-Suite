// Audio Synthesizer Sound Patch #111
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_111 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_111: SoundPresetConfig_111 = {
  id: 'synth_patch_111',
  baseFrequency: 1005,
  modFrequency: 900,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_111(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_111.baseFrequency, 0.25, SOUND_CONFIG_111.oscillatorType, 0.3);
}
