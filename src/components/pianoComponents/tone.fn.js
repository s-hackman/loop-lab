import * as Tone from "tone";
export function playC4(
  chorus1, chorus2, chorus3
  ) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("C4", "8n");
}
export function playDb4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("Db4", "8n");
}
export function playD4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("D4", "8n");
}
export function playEb4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("Eb4", "8n");
}
export function playE4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("E4", "8n");
}
export function playF4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("F4", "8n");
}
export function playGb4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("Gb4", "8n");
}
export function playG4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("G4", "8n");
}
export function playAb4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("Ab4", "8n");
}
export function playA4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("A4", "8n");
}
export function playBb4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("Bb4", "8n");
}
export function playB4(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("B4", "8n");
}
export function playC5(chorus1, chorus2, chorus3) {
  const chorus = new Tone.Chorus(chorus1, chorus2, chorus3).toMaster();
  const synth = new Tone.Synth().connect(chorus);
  synth.triggerAttackRelease("C5", "8n");
}
export function playNote(event, chorus1, chorus2, chorus3) {
  if (event.keyCode === 65) {
    playC4();
  }
  if (event.keyCode === 87) {
    playDb4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 83) {
    playD4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 69) {
    playEb4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 68) {
    playE4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 70) {
    playF4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 84) {
    playGb4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 71) {
    playG4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 89) {
    playAb4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 72) {
    playA4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 85) {
    playBb4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 74) {
    playB4(chorus1, chorus2, chorus3);
  }
  if (event.keyCode === 75) {
    playC5(chorus1, chorus2, chorus3);
  }
}
