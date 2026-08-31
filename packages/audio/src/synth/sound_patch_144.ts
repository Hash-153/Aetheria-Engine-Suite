// Audio Synthesizer Sound Patch #144
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_144 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_144: SoundPresetConfig_144 = {
  id: 'synth_patch_144',
  baseFrequency: 620,
  modFrequency: 1560,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_144(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_144.baseFrequency, 0.25, SOUND_CONFIG_144.oscillatorType, 0.3);
}
