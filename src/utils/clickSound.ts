import clickMp3 from "../assets/click.mp3";

let clickAudio: HTMLAudioElement | null = null;

export function playClickSound() {
  if (!clickAudio) {
    clickAudio = new Audio(clickMp3);
    clickAudio.volume = 0.2;
  }
  clickAudio.currentTime = 0;
  clickAudio.play();
}
