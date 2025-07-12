import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { Text, View } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar'
import { useEffect } from 'react'
import * as SystemUI from 'expo-system-ui'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'Kanit-Regular': require('../assets/fonts/Kanit-Regular.ttf'),
    'Kanit-Bold': require('../assets/fonts/Kanit-Bold.ttf'),
    'Kanit-SemiBold': require('../assets/fonts/Kanit-SemiBold.ttf'),
    // เพิ่มน้ำหนักอื่น ๆ ตามที่ต้องการ
  })

  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#ffffff')
    NavigationBar.setBackgroundColorAsync('#ffffff')
    NavigationBar.setVisibilityAsync('visible')
  }, [])

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading fonts...</Text>
      </View>
    )
  }

  return <Stack screenOptions={{ headerShown: false }} />
}
