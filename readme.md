Appium & WebdriverIO
#Dilpreet code repository:
https://github.com/dilpreetj/webdriverio-appium-course

# prerequisites

- node.js (eg. vith nvm - node version manager);
- Java JDK 17 (from java.sun.com; choose ARM64 DMG Installer) + setting up JAVA_HOME path (all paths are here, in the environment variables file: terminal => vim ~/.zshenv)
- Android Studio (from https://developer.android.com/studio) + setting up ANDROID_HOME path / Android Emulator setup: Android Studio / AVD Manager / Create virtual device / select Phone / download S (Android 12.0) or R (Android 11.0) or Q (Android 10.0) / select S, R or Q / run emulator
- Appium Desktop Inspector (from https://github.com/appium/appium-inspector/releases); later we will be connecting emulator with appium server;
- Appium 2.0 (npm install -g appium / or in case of errors => sudo npm install -g appium --unsafe-perm=true --allow-root);
- install Appium drivers => 1) appium driver install xcuitest / 2) appium driver install uiautomator2; check drivers => 3) appium driver lis (or with flag --installed);
- install appium-doctor => sudo npm install appium-doctor -g (DEPRECATED!);

# WebdriverIO setup and configuration:

- WebdriverIO setup:
  - go to any folder, e.g. => cd ~/Desktop/Private/WebdriverIO - Appium;
  - run => npm init wdio webdriverio-appium-v8 to install WebdriverIO CLI (this ‘webdriverio-appium-v8’ will just generate a folder for our project);
  - answer bunch of questions; e.g. test will run locally, on local machine, using framework mocha.js, don’t need a compiler for a moment, no automatically generated test files, default reporter - spec, no plugins, service for test setup - appium, no base url, npm install - yes,
- WebdriverIO configuration is here => wdio.conf.js (inside this webdrioverio-appium-v8 folder we generated previously); thanks to wdio cli and answering those questions, the config file is mostly filled, but still there are some options to provide there (e.g. capabilities);

# final installation of Appium:

- install appium => npm install appium --save-dev;

# terminal commands:

- adb devices (to see if there's an emulator running);
- npx wdio (to run tests);
- appium -p 4724 (to set up appium server port);

# writing tests flow (Appium + Appium Inspector):

- run Appium server in terminal => appium -p 4724;
- open Android Studio, run emulator compatible with Appium Inspector data (saved capability set);
- find elements for testing,

# executing tests flow (WebdriverIO):

- open Android Studio, run emulator compatible with wdio.conf.js data
- run test in a terminal => npx wdio;
