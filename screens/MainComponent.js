import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native';
import SettingsScreen from './SettingsScreen';
import QueryScreen from './QueryScreen';
import CreateAccountScreen from './CreateAccountScreen';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const MainComponent = () => {
  const Stack = createNativeStackNavigator()

  return (
    <SafeAreaView style={styles.container} >
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen
            name='Query'
            component={QueryScreen}
            options={({ navigation }) => ({
              title: 'Ask a Question',
              headerStyle: styles.headerStyle,
              headerTintColor: styles.headerColorTint,
              headerRight: () => (
                <Icon
                  name='gear'
                  type='font-awesome'
                  iconStyle={styles.stackIcon}
                  color={styles.headerColorTint}
                  onPress={() => navigation.navigate('Settings')}
                />
              )
            })}
          />
          <Stack.Screen
            name='Settings'
            component={SettingsScreen}
            options={{ 
              title: 'Settings',
              headerStyle: styles.headerStyle,
              headerTintColor: styles.headerColorTint,
          }}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ 
              title: 'Login',
              headerStyle: styles.headerStyle,
              headerTintColor: styles.headerColorTint,
          }}
          />
          <Stack.Screen
            name='CreateAccount'
            component={CreateAccountScreen}
            options={{ 
              title: 'Create Account',
              headerStyle: styles.headerStyle,
              headerTintColor: styles.headerColorTint,
          }}
          />
          <Stack.Screen
            name='ForgotPassword'
            component={ForgotPasswordScreen}
            options={{ 
              title: 'Forgot Password',
              headerStyle: styles.headerStyle,
              headerTintColor: styles.headerColorTint,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight
  },
  headerStyle: {
    backgroundColor: '#546179',
  },
  headerColorTint: '#ffffff'
})

export default MainComponent