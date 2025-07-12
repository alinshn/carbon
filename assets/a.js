import React, { useState, useCallback } from 'react'
import { View, ScrollView, RefreshControl, StyleSheet } from 'react-native'
import ColorList from '../../components/ColorList'

export default function Home() {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }, [])

  return (
    <ScrollView
      style={styles.container} // ✅ มีพื้นหลัง
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#0891b2']} />
      }
    >
      <ColorList color="#0891b2" />
    </ScrollView>
  )
}

