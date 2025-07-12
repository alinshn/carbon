import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Camera, Database, Users, ChevronLeft, ChevronRight } from 'lucide-react-native'
import { useRouter } from 'expo-router'

const onboardingSteps = [
  {
    icon: Camera,
    title: 'ตั้งเป้าหมาย CO2',
    description: 'ถ่ายภาพใบพืชที่มีอาการผิดปกติ ระบบ AI จะวิเคราะห์และบอกโรคได้ทันที',
    tip: 'ถ่ายในที่แสงสว่าง ระยะ 15-20 ซม.',
  },
  {
    icon: Database,
    title: 'ติดตามกิจกรรม',
    description: 'ข้อมูลโรคพืชที่พบบ่อยในภาคตะวันออกเฉียงเหนือ พร้อมวิธีการรักษา',
    tip: 'ครอบคลุมโรคไหม้ขาว โรคใบไหม้แบคทีเรีย',
  },
  {
    icon: Users,
    title: 'รับรางวัล',
    description: 'เชื่อมต่อกับผู้เชี่ยวชาญการเกษตรในพื้นที่ เมื่อต้องการคำแนะนำเพิ่มเติม',
    tip: 'บริการฟรี 24 ชั่วโมง',
  },
    {
    icon: Users,
    title: 'ชุมชน',
    description: 'เชื่อมต่อกับผู้เชี่ยวชาญการเกษตรในพื้นที่ เมื่อต้องการคำแนะนำเพิ่มเติม',
    tip: 'บริการฟรี 24 ชั่วโมง',
  },
]

export default function OnboardingScreen() {
  const [current, setCurrent] = useState(0)
  const router = useRouter()
  const step = onboardingSteps[current]
  const Icon = step.icon

  const handleNext = () => {
    if (current === onboardingSteps.length - 1) {
      router.replace('/tabs')
    } else {
      setCurrent(current + 1)
    }
  }

  const handleBack = () => {
    if (current > 0) setCurrent(current - 1)
  }

  return (
    <View style={styles.container}>
      {/* Step Indicator */}
      <View style={styles.dotsContainer}>
        {onboardingSteps.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, { backgroundColor: i <= current ? '#047857' : '#d1fae5' }]}
          />
        ))}
      </View>

      {/* Main Card */}
      <View style={styles.card}>
        <View style={styles.iconWrapper}>
          <Icon size={40} color="#047857" />
        </View>
        <Text style={styles.titlename}>{step.title}</Text>
        <Text style={styles.desc}>{step.description}</Text>
        <View style={styles.tipBox}>
          <Text style={styles.tipText}>💡 {step.tip}</Text>
        </View>
      </View>

      {/* Navigation */}
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={handleBack} disabled={current === 0}>
          <View style={styles.navBtn}>
            <ChevronLeft size={20} color={current === 0 ? '#ccc' : '#047857'} />
            <Text style={[styles.navText, { color: current === 0 ? '#ccc' : '#047857' }]}>ย้อนกลับ</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext}>
          <View style={styles.navBtn}>
            <Text style={styles.navText}>
              {current === onboardingSteps.length - 1 ? 'เริ่มใช้งาน' : 'ถัดไป'}
            </Text>
            <ChevronRight size={20} color="#047857" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Skip Option */}
      <TouchableOpacity onPress={() => router.replace('/tabs')}>
        <Text style={styles.skip}>ข้ามการแนะนำ</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecfdf5',
    padding: 24,
    justifyContent: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  card: {
    backgroundColor: '#ffffffcc',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#d1fae5',
    padding: 16,
    borderRadius: 32,
    marginBottom: 16,
  },
  titlename: {
    fontFamily: 'Kanit-SemiBold',
    fontSize: 20,
    color: '#047857',
    marginBottom: 8,
    textAlign: 'center',
  },
  desc: {
    fontFamily: 'Kanit-Regular',
    fontSize: 14,
    color: '#065f46',
    marginBottom: 16,
    textAlign: 'center',
  },
  tipBox: {
    backgroundColor: '#ecfdf5',
    borderRadius: 8,
    padding: 10,
    borderColor: '#bbf7d0',
    borderWidth: 1,
  },
  tipText: {
    fontFamily: 'Kanit-SemiBold',
    color: '#047857',
    fontSize: 13,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  navBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navText: {
    fontFamily: 'Kanit-SemiBold',
    fontSize: 14,
    color: '#047857',
    marginHorizontal: 4,
  },
  skip: {
    fontFamily: 'Kanit-SemiBold',
    textAlign: 'center',
    color: '#10b981',
    fontSize: 13,
  },
})
