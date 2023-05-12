import Constants from 'expo-constants';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useState } from 'react';
import SettingsScreen from './SettingsScreen';
import QueryScreen from './QueryScreen';

const Main = () => {
  const [settings, setSettings] = useState(false)

  const toggleSettings = () => {
    setSettings(!settings)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{settings ? 'Settings' : 'Ask Judge Genie'}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Icon
              name='gear'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => toggleSettings()}
              color='#ffffff'
            />
          </TouchableOpacity>
        </View>
      </View>
      {settings ? <SettingsScreen /> : <QueryScreen />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7300ff',
    height: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
})

export default Main

