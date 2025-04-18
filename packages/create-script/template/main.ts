import { openMail } from "./src/demo";

const greeting = (name: string) => {
  name && log.info(`Hello, ${name}!`);
};

(async function () {
  greeting(settings.name);

  // Return to main UI
  await genshin.returnMainUi();

  await openMail();
})();
