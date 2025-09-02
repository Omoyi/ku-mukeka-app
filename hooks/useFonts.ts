import * as Font from "expo-font";

export async function loadFonts() {
  await Font.loadAsync({
    sankofa: require("./assets/fonts/SankofaDisplay-Regular.ttf"),
    rethink: require("./assets/fonts/RethinkSans-Regular.ttf"),
    "rethink-bold": require("./assets/fonts/RethinkSans-Bold.ttf"),
    "rethink-md": require("./assets/fonts/RethinkSans-Medium.ttf"),
  });
}
