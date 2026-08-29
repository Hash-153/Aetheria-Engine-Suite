// Audio Synthesizer Sound Patch #104
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_104 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_104: SoundPresetConfig_104 = {
  id: 'synth_patch_104',
  baseFrequency: 900,
  modFrequency: 760,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'square'
};

export function playSoundPreset_104(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_104.baseFrequency, 0.25, SOUND_CONFIG_104.oscillatorType, 0.3);
}
