// Audio Synthesizer Sound Patch #055
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_55 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_55: SoundPresetConfig_55 = {
  id: 'synth_patch_055',
  baseFrequency: 1045,
  modFrequency: 1540,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sine'
};

export function playSoundPreset_55(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_55.baseFrequency, 0.25, SOUND_CONFIG_55.oscillatorType, 0.3);
}
