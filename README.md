# ProductionApp

React Native app for My Beauty Pass with React Navigation, NativeWind, Keychain, and Android/iOS support.

## Requirements

Before installing, make sure these are available on your machine:

- Node.js 22 or newer
- npm
- Android Studio and Android SDK for Android
- Xcode and CocoaPods for iOS on macOS
- Java JDK required by React Native

## Install

Run these commands from the project root:

```sh
npm install
```

If you are working on iOS, install CocoaPods dependencies:

```sh
cd ios
bundle install
bundle exec pod install
cd ..
```

If NativeWind or Metro cache needs a reset, use:

```sh
npx react-native start --reset-cache
```

## Run

Start Metro:

```sh
npm start
```

Run Android:

```sh
npm run android
```

Run iOS:

```sh
npm run ios
```

## Useful Commands

Type check the project:

```sh
npx tsc --noEmit
```

Run lint:

```sh
npm run lint
```

Run tests:

```sh
npm test
```

Build a Metro bundle for Android:

```sh
npx react-native bundle --platform android --dev true --entry-file index.js --bundle-output .bundle/test.bundle --assets-dest .bundle
```

## NativeWind Setup Used In This Project

This project is configured with NativeWind and Tailwind CSS.

Files used for styling setup:

- [babel.config.js](babel.config.js)
- [metro.config.js](metro.config.js)
- [tailwind.config.js](tailwind.config.js)
- [global.css](global.css)
- [global.d.ts](global.d.ts)

Custom color used in Tailwind:

- `primary: #9400d3`

## App Screens

- Splash screen
- Onboarding screen
- Welcome screen
- Login screen

## Notes

- If Metro shows an old cache error, stop the server and restart with `npx react-native start --reset-cache`.
- If Android build fails after dependency changes, reinstall packages with `npm install` and rebuild.
- The project uses React Navigation stack routing in `src/navigation/RootNavigation.tsx`.
