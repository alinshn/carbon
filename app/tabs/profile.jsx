import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import SettingsSection from '../../components/Settings'
import { User, Target, Bell } from 'lucide-react-native'

export default function Profile() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FCF9',paddingTop: 60, }}>
      <View style={styles.header}>
        <Text style={styles.title}>ตั้งค่า</Text>
      </View>
      <SettingsSection
        title="โปรไฟล์"
        items={[
          { icon: User, label: 'แก้ไขโปรไฟล์', onPress: () => {} },
          { icon: Target, label: 'เปลี่ยนเป้าหมาย', onPress: () => {} },
        ]}
      />

      <SettingsSection
        title="การแจ้งเตือน"
        items={[
          { icon: Bell, label: 'แจ้งเตือนทั่วไป', onPress: () => {} },
        ]}
      />

      
      <SettingsSection
        title="ระบบ"
        items={[
          { icon: Bell, label: 'ช่วยเหลือ', onPress: () => {} },
          { icon: Bell, label: 'ออกจากระบบ', onPress: () => {} },
        ]}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FCF9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  title: {
    fontFamily: 'Kanit-SemiBold',
    fontSize: 24,
    color: '#0f172a',
  },
})
