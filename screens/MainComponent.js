import Constants from 'expo-constants';
import { Platform, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import SettingsScreen from './SettingsScreen';
import QueryScreen from './QueryScreen';
import CreateAccountScreen from './CreateAccountScreen';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const Main = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Query'
          component={QueryScreen}
          options={({ navigation }) => ({
            title: 'Ask a Question',
            headerRight: () => (
              <Icon
                name='gear'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.navigate('Settings')}
              />
            )
          })}
        />
        <Stack.Screen
          name='Settings'
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name='CreateAccount'
          component={CreateAccountScreen}
          options={{ title: 'Create Account' }}
        />
        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPasswordScreen}
          options={{ title: 'Forgot Password' }}
        />
      </Stack.Navigator>
    </NavigationContainer>



    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.title}>{settings ? 'Settings' : 'Ask Judge Genie'}</Text>
    //     <View style={{ flexDirection: 'row' }}>
    //       <TouchableOpacity>
    //         <Icon
    //           name='gear'
    //           type='font-awesome'
    //           iconStyle={styles.stackIcon}
    //           onPress={() => toggleSettings()}
    //           color='#ffffff'
    //         />
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   {settings ? <SettingsScreen /> : <QueryScreen />}
    // </View>
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