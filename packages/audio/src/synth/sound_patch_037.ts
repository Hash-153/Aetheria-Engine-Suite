// Audio Synthesizer Sound Patch #037
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_37 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_37: SoundPresetConfig_37 = {
  id: 'synth_patch_037',
  baseFrequency: 775,
  modFrequency: 1180,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'sawtooth'
};

export function playSoundPreset_37(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_37.baseFrequency, 0.25, SOUND_CONFIG_37.oscillatorType, 0.3);
}
