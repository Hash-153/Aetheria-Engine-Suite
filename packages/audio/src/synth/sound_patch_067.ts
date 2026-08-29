// Audio Synthesizer Sound Patch #067
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_67 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_67: SoundPresetConfig_67 = {
  id: 'synth_patch_067',
  baseFrequency: 345,
  modFrequency: 1780,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_67(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_67.baseFrequency, 0.25, SOUND_CONFIG_67.oscillatorType, 0.3);
}
