import React, { useState, useCallback } from 'react'
import { ScrollView, RefreshControl, StyleSheet } from 'react-native'
import ColorList from '../../components/ColorList'

export default function Create() {
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
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#78716c']} />
      }
    >
      <ColorList color="#78716c" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#f5f5f4', // ☁️ เทาอ่อนกลืนกับ #78716c
  },
  content: {
  },
})