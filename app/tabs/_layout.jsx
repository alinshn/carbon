import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'

const _layout = () => {
  // กำหนด default font ทั่วทั้งแอป
  useEffect(() => {
    Text.defaultProps = Text.defaultProps || {}
    Text.defaultProps.style = { fontFamily: 'Kanit-Regular' }
  }, [])

  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'หน้าหลัก',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'รางวัล',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'ชุมชน',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'ตั้งค่า',
          headerShown: false,
        }}
      />
    </Tabs>
  )
}

export default _layout
