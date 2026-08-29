// Audio Synthesizer Sound Patch #117
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_117 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_117: SoundPresetConfig_117 = {
  id: 'synth_patch_117',
  baseFrequency: 1095,
  modFrequency: 1020,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_117(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_117.baseFrequency, 0.25, SOUND_CONFIG_117.oscillatorType, 0.3);
}
