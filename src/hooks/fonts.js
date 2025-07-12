// hooks/Fonts.js
import { useFonts } from 'expo-font'

export default function useKanitFonts() {
  const [fontsLoaded] = useFonts({
    'Kanit-Thin': require('../assets/fonts/Kanit-Thin.ttf'),
    'Kanit-ExtraLight': require('../assets/fonts/Kanit-ExtraLight.ttf'),
    'Kanit-Light': require('../assets/fonts/Kanit-Light.ttf'),
    'Kanit-Regular': require('../assets/fonts/Kanit-Regular.ttf'),
    'Kanit-Medium': require('../assets/fonts/Kanit-Medium.ttf'),
    'Kanit-SemiBold': require('../assets/fonts/Kanit-SemiBold.ttf'),
    'Kanit-Bold': require('../assets/fonts/Kanit-Bold.ttf'),
    'Kanit-ExtraBold': require('../assets/fonts/Kanit-ExtraBold.ttf'),
    'Kanit-Black': require('../assets/fonts/Kanit-Black.ttf'),

    // (optional) italic styles
    'Kanit-ThinItalic': require('../assets/fonts/Kanit-ThinItalic.ttf'),
    'Kanit-ExtraLightItalic': require('../assets/fonts/Kanit-ExtraLightItalic.ttf'),
    'Kanit-LightItalic': require('../assets/fonts/Kanit-LightItalic.ttf'),
    'Kanit-Italic': require('../assets/fonts/Kanit-Italic.ttf'),
    'Kanit-MediumItalic': require('../assets/fonts/Kanit-MediumItalic.ttf'),
    'Kanit-SemiBoldItalic': require('../assets/fonts/Kanit-SemiBoldItalic.ttf'),
    'Kanit-BoldItalic': require('../assets/fonts/Kanit-BoldItalic.ttf'),
    'Kanit-ExtraBoldItalic': require('../assets/fonts/Kanit-ExtraBoldItalic.ttf'),
    'Kanit-BlackItalic': require('../assets/fonts/Kanit-BlackItalic.ttf'),
  })

  return [fontsLoaded]
}
