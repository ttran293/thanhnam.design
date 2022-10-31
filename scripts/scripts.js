const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 5000, yoyo: true }
);
tween.start()


