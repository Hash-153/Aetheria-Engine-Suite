// Audio Synthesizer Sound Patch #105
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_105 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_105: SoundPresetConfig_105 = {
  id: 'synth_patch_105',
  baseFrequency: 915,
  modFrequency: 780,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_105(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_105.baseFrequency, 0.25, SOUND_CONFIG_105.oscillatorType, 0.3);
}
