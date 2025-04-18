// src/demo.ts
var openMail = async (maxAttempts = 5) => {
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
    await sleep(1e3);
  }
  region && region.isExist() && region.click();
};

// main.ts
var greeting = (name) => {
  name && log.info(`Hello, ${name}!`);
};
(async function() {
  greeting(settings.name);
  await genshin.returnMainUi();
  await openMail();
})();
