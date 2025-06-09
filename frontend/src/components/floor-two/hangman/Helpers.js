export const show = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export const checkWin = (correct, wrong, word) => {
  let status = "win";

  // Check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // Check for lose
  if (wrong.length === 9) status = "lose";

  return status;
};
