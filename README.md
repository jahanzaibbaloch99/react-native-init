# react-native-init

#### A simple react-native project with basic dependencies setup

#### Features:

1. Navigation setup using react-navigation
2. State management using Redux
3. HTTP service client using Axios
4. FastImage component for image caching and fast loading
5. Simple directory structure
6. Firebase Push Notifications with Image support
7. Stripe helper
8. Deeplinks helper
9. App auto update helper
10. Firebase InApp Messaging support
11. Firebase Events Logging helper

#### Todo list for future:

1. Regex helpers
2. Permissions
3. SVG images
4. Redux Saga
5. Toasts
6. Drawer
7. Splashscreen
8. Change App Icon to generic
9. Google style drawer menu
10. No content found component 

#### Installation Instructions:
1. Simply download this repository
2. Change bundle identifier and package name for your own application by following below instructions
3. Add Google services.json file in android and ios directories in their proper location for app to build

#### Renaming package for production

To upload this app on Google Play or App Store, you'll have to rename the app to something unique. Follow these steps for React Native version 0.63.4:

##### For iOS:

iOS is simple to rename, use xCode to rename app bundle identifier to your liking

##### For Android:

For Android you'll have to modify a couple of files.

1. android/app/BUCK - rename package in android_build_config and android_resource configs
2. android/app/build.gradle - change applicationId
3. ReactNativeFlipper.java - rename package
4. Remove com/myapp folder and put your folder structure. For package name like com.mycompany.myapp.subapp you have to make folder structure like this com/mycompany/myapp/subapp and put your MainApplication.java and MainActivity.java from com.myapp into these folders
5. Rename MainActivity and MainApplication package in your app folder
6. (Optional) You may need to update Google services file if you're using Firebase and replace package name

#### Pull requests are welcome
