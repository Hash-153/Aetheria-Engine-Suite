// Audio Synthesizer Sound Patch #121
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_121 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_121: SoundPresetConfig_121 = {
  id: 'synth_patch_121',
  baseFrequency: 275,
  modFrequency: 1100,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_121(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_121.baseFrequency, 0.25, SOUND_CONFIG_121.oscillatorType, 0.3);
}
