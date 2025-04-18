export const openMail = async (maxAttempts: number = 5) => {
  keyPress("ESCAPE");

  const findMail = () => {
    const mat = file.readImageMatSync("./assets/mail.png");
    const ro = RecognitionObject.templateMatch(mat);
    return captureGameRegion().find(ro);
  };

  let region;
  let count = 0;
  while ((region = findMail()).isEmpty() && count < maxAttempts) {
    count += 1;
    await sleep(1000);
  }

  region && region.isExist() && region.click();
};
