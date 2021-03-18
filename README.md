# react-native-init

#### A simple react-native project with basic dependencies setup

#### Features:
1. Navigation setup using react-navigation
2. State management using Redux
3. HTTP service client using Axios
4. FastImage component for image caching and fast loading
5. Simple directory structure
6. Firebase Push Notifications helper
7. Stripe helper
8. Deeplinks helper
9. App auto update helper 

#### Todo list for future:

1. Firebase InApp messaging
2. Regex helpers
3. Permissions
4. SVG images
5. Redux Saga
6. Toasts
7. Drawer

#### Renaming package for production

To upload this app on Google Play, you'll have to rename the package to something unique. Follow these steps to rename the app for React Native version 0.64.4:

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
