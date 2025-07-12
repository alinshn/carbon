import React, { useState, useCallback } from 'react'
import {
  View,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native'
import HeaderGreeting from '../../components/HeaderGreeting'
import ColorList from '../../components/ColorList'

export default function Home() {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => setRefreshing(false), 2000)
  }, [])

  return (
    <View style={styles.wrapper}>
      <HeaderGreeting name="นิรันดร์" notifications={3} />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#0891b2']}
          />
        }
      >
        <ColorList color="#0891b2" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  content: {
    paddingBottom: 40,
  },
})
