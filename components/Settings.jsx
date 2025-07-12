import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ChevronRight } from 'lucide-react-native'

export default function SettingsSection({ title, items = [] }) {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}

      {items.map(({ icon: Icon, label, onPress }, index) => {
        const isLast = index === items.length - 1

        return (
          <TouchableOpacity
            key={index}
            style={[styles.row, isLast && styles.lastRow]}
            onPress={onPress}
          >
            <View style={styles.iconWrapper}>
              {Icon && <Icon size={20} color="#0f172a" />}
            </View>
            <Text style={styles.label}>{label}</Text>
            <ChevronRight size={20} color="#0f172a" style={styles.chevron} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  sectionTitle: {
    fontFamily: 'Kanit-Regular',
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.6,
    borderBottomColor: '#e5e7eb',
  },
  lastRow: {
    borderBottomWidth: 0, // ❌ ลบเส้นล่างในแถวสุดท้าย
  },
  iconWrapper: {
    width: 32,
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Kanit-Regular',
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#0f172a',
  },
  chevron: {
    marginLeft: 8,
  },
})
