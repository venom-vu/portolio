const steps = "/-\\|";
const FPS = 2;
const frameInterval = 1000 / FPS;

let step = 0;
let lastTimestep = 0;
let animId: number | null = null;

export function startTitleAnimation(pathName: string) {
  if (animId !== null) {
    cancelAnimationFrame(animId);
  }

  function animation(timestamp: number) {
    if (lastTimestep + frameInterval < timestamp) {
      document.title = `${steps[step++]} VENOM | ${pathName}`;
      step %= steps.length;
      lastTimestep = timestamp;
    }
    animId = requestAnimationFrame(animation);
  }

  animId = requestAnimationFrame(animation);
}
