import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Bell, User } from 'lucide-react-native'

export default function HeaderGreeting({ name = 'นิรนาม', notifications = 3 }) {
  return (
    <View style={styles.container}>
      {/* Profile Avatar + Greeting */}
      <View style={styles.left}>
        <View style={styles.avatar}>
          <User size={28} color="#6b21a8" />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.greeting}>สวัสดี</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>

      {/* Notification Button */}
      <Pressable style={styles.bellWrapper}>
        <Bell size={24} color="#0f172a" />
        {notifications > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notifications}</Text>
          </View>
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    //paddingBottom: 16,
    flexDirection: 'row',
   // alignItems: 'center',
    justifyContent: 'space-between',
   // backgroundColor: '#f9fafb',
  },
  left: {
    flexDirection: 'row',
   // alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#22c55e',
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    marginLeft: 12,
  },
  greeting: {
    fontSize: 12,
    color: '#6b7280',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  bellWrapper: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    elevation: 2,

        backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#f59e0b',
    borderRadius: 999,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
})
