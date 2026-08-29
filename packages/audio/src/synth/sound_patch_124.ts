// Audio Synthesizer Sound Patch #124
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_124 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_124: SoundPresetConfig_124 = {
  id: 'synth_patch_124',
  baseFrequency: 320,
  modFrequency: 1160,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_124(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_124.baseFrequency, 0.25, SOUND_CONFIG_124.oscillatorType, 0.3);
}
