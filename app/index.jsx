import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native'
import { Leaf, Sparkles } from 'lucide-react-native'
import { useRouter, useRootNavigationState } from 'expo-router'
import * as SystemUI from 'expo-system-ui'
import * as NavigationBar from 'expo-navigation-bar'

const { width } = Dimensions.get('window')

export default function IndexScreen() {
  const [progress, setProgress] = useState(0)
  const animatedProgress = useRef(new Animated.Value(0)).current
  const router = useRouter()
  const navReady = useRootNavigationState()

  // ✅ กลืนขอบล่าง Android ให้เข้ากับพื้นหลัง
  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#ffffff')
    NavigationBar.setBackgroundColorAsync('#ffffff')
    NavigationBar.setVisibilityAsync('visible')
  }, [])

  // ✅ เพิ่ม progress ทีละ 2% ทุก 200ms
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + 2
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, 200)
    return () => clearInterval(timer)
  }, [])

  // ✅ แอนิเมชันความกว้าง
  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start()
  }, [progress])

  // ✅ เมื่อโหลดครบ เปลี่ยนไปหน้า onboarding
  useEffect(() => {
    if (!navReady?.key) return
    if (progress >= 100) {
      setTimeout(() => {
        router.replace('/onboarding')
      }, 500)
    }
  }, [progress, navReady])

  return (
    <View style={styles.container}>
      {/* โลโก้ */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Leaf size={48} color="#ffffff" />
        </View>
        <View style={styles.sparkles}>
          <Sparkles size={24} color="#facc15" />
        </View>
      </View>

      {/* ข้อความหลัก */}
      <Text style={styles.title}>SUT EcoCarbon</Text>
      <Text style={styles.subtitle}>ติดตามคาร์บอนฟุตพริ้นต์</Text>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              width: animatedProgress.interpolate({
                inputRange: [0, 100],
                outputRange: [0, width * 0.7],
                extrapolate: 'clamp',
              }),
            },
          ]}
        />
      </View>
      <Text style={styles.progressText}>กำลังเตรียมระบบ... {progress}%</Text>

      {/* Tagline */}
      <View style={styles.tagline}>
        <Text style={styles.taglineMain}>เทคโนโลยี AI ความแม่นยำ 99.78%</Text>
        <Text style={styles.taglineSub}>สำหรับนักศึกษา SUT</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecfdf5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    position: 'relative',
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#059669',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  sparkles: {
    position: 'absolute',
    top: -8,
    right: -8,
  },
  title: {
    fontFamily: 'Kanit-SemiBold',
    fontSize: 36,
    color: '#13343B',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Kanit-Regular',
    fontSize: 16,
    color: '#047857',
    marginBottom: 24,
    textAlign: 'center',
  },
  progressBar: {
    width: '70%',
    height: 10,
    backgroundColor: '#bbf7d0',
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: 10,
    backgroundColor: '#047857',
    borderRadius: 999,
  },
  progressText: {
    fontFamily: 'Kanit-Regular',
    fontSize: 14,
    color: '#047857',
  },
  tagline: {
    position: 'absolute',
    bottom: 32,
    alignItems: 'center',
  },
  taglineMain: {
    fontFamily: 'Kanit-Regular',
    fontSize: 14,
    color: '#047857',
  },
  taglineSub: {
    fontFamily: 'Kanit-Regular',
    fontSize: 12,
    color: '#10b981',
    marginTop: 4,
  },
})
