// Audio Synthesizer Sound Patch #006
import { ProceduralAudioEngine } from '../synth.js';

export interface SoundPresetConfig_6 {
  id: string;
  baseFrequency: number;
  modFrequency: number;
  envelopeAttack: number;
  envelopeDecay: number;
  envelopeSustain: number;
  envelopeRelease: number;
  oscillatorType: OscillatorType;
}

export const SOUND_CONFIG_6: SoundPresetConfig_6 = {
  id: 'synth_patch_006',
  baseFrequency: 310,
  modFrequency: 560,
  envelopeAttack: 0.02,
  envelopeDecay: 0.15,
  envelopeSustain: 0.6,
  envelopeRelease: 0.3,
  oscillatorType: 'triangle'
};

export function playSoundPreset_6(audio: ProceduralAudioEngine): void {
  audio.playTone(SOUND_CONFIG_6.baseFrequency, 0.25, SOUND_CONFIG_6.oscillatorType, 0.3);
}
