// Audio Synthesizer Sound Patch #039
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_39 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_39: SoundPresetConfig_39 = {
  id: 'synth_patch_039',
  baseFrequency: 805,
  modFrequency: 1220,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_39(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_39.baseFrequency, 0.25, SOUND_CONFIG_39.oscillatorType, 0.3);
}
