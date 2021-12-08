import app from "./app";
import config from "./config";

// TODO: App Configuration
const { APP_PORT } = config;

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`);
});
