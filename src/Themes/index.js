import { Platform } from "react-native";

const Fonts = {
    defaultFont: Platform.select({
        ios: 'San Francisco',
        android: 'Roboto',
    })
}

const Colors = {
    greenLight: '#51C164',
    greenDark: '#187E43',
    redLight: '#E45A5B',
    redDark: '#C81919',
}

export {
    Fonts,
    Colors
}