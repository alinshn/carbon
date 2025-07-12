import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Leaf, Sparkles, Bell } from 'lucide-react-native'

const ColorList = ({ color }) => {
  const boxes = [
    {
      id: 1,
      icon: <Leaf size={20} color="#fff" />,
      title: 'กิจกรรมสีเขียว',
      content: ['ปลูกต้นไม้', 'รีไซเคิลขยะ', 'ใช้ถุงผ้าแทนพลาสติก'],
    },
    {
      id: 2,
      icon: <Sparkles size={20} color="#fff" />,
      title: 'พฤติกรรมลดคาร์บอน',
      content: ['เดินแทนการขับรถ', 'ปิดไฟเมื่อไม่ใช้งาน'],
    },
    {
      id: 3,
      icon: <Bell size={20} color="#fff" />,
      title: 'การแจ้งเตือน',
      content: ['เปิดรับแจ้งเตือนกิจกรรมใหม่'],
    },
  ]

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {boxes.map((box, index) => (
        <View
          key={box.id}
          style={[styles.colorBox, { backgroundColor: color, opacity: [1, 0.8, 0.5][index % 3] || 0.4 }]}
        >
          <View style={styles.header}>
            {box.icon}
            <Text style={styles.title}>{box.title}</Text>
          </View>

          {box.content.map((line, idx) => (
            <Text key={idx} style={styles.textLine}>
              • {line}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    //paddingTop: 5,
    paddingBottom: 20,
    //backgroundColor: 'rgba(249, 252, 249, 1)',
  },
  colorBox: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  textLine: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
  },
})

export default ColorList
