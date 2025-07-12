import React, { useState, useCallback } from 'react'
import { ScrollView, RefreshControl, StyleSheet } from 'react-native'
import ColorList from '../../components/ColorList'

export default function Explore() {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }, [])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#059669']} />
      }
    >
      <ColorList color="#059669" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#ecfdf5', // 💚 พื้นหลังเขียวอ่อน (match #059669)
  },
  content: {
  },
})
