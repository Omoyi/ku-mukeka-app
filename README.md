# Welcome to Ku Mukeka App my Expo App Thesis Project 👋

This is an [Expo](https://expo.dev) project SDK 51 created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# Tools and Technologies

## Dependencies
`@supabase/supabase-js`: This library connects my app to the backend (Supabase).

`@react-native-async-storage/async-storage`: This stores user information securely on your phone so they don't have to log in every time.

`@nozbe/watermelondb & @nozbe/with-observables`: These are for offline database, allowing the app to work without an internet connection.

`@react-navigation/...`: These libraries handle all the navigation in my app—moving from one screen to another (e.g., from the login screen to the main page).

`nativewind & tailwindcss`: These are for styling the app's interface.

`onnxruntime-react-native`: This library is for the offline AI features.

## Get started

1. Install dependencies

   ```bash
   npm install
   npx create-expo-app *Project_Name*
   npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @nozbe/watermelondb @nozbe/with-observables @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context nativewind tailwindcss onnxruntime-react-native //A one time installation of all necessary libraries(supabase, react native, and watermelonDB) to avoid dependency errors. WatermelonDB only works with react version 18 and below and Expo SDK 51.

   ```

2. Start the app

   ```bash
   npx expo start --clear
   ```

3. Delete App.js
   
   expo-router handles the app's entry point, so you can remove the App.js file.


In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo


## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

