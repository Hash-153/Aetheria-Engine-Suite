// Audio Synthesizer Sound Patch #076
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_76 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_76: SoundPresetConfig_76 = {
  id: 'synth_patch_076',
  baseFrequency: 480,
  modFrequency: 1960,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_76(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_76.baseFrequency, 0.25, SOUND_CONFIG_76.oscillatorType, 0.3);
}
