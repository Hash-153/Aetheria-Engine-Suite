// Audio Synthesizer Sound Patch #009
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_9 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_9: SoundPresetConfig_9 = {
  id: 'synth_patch_009',
  baseFrequency: 355,
  modFrequency: 620,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_9(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_9.baseFrequency, 0.25, SOUND_CONFIG_9.oscillatorType, 0.3);
}
