import { Text, View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";

const SettingsScreen = ({ navigation, route }) => {

  const deleteAccount = () => Alert.alert(
    'Delete Account',
    'Are you sure you wish to delete your account?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => console.log('Cancel Pressed')
      },
      {
        text: 'Delete Account',
        onPress: () => console.log('Account Deleted')
      }
    ],
    { cancelable: false }
  )


  return (
    <View style={styles.container} >
      <View style={styles.content} >
        <Button buttonStyle={styles.button} title='Login' onPress={() => navigation.navigate('Login')} />
        <Button buttonStyle={styles.button} title='Create Account' onPress={() => navigation.navigate('CreateAccount')} />
        <Button buttonStyle={styles.button} title='Forgot Password' onPress={() => navigation.navigate('ForgotPassword')} />
        <Button buttonStyle={styles.button} title='Delete Account' onPress={() => deleteAccount()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: '#5B6E4F',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    fontSize: 24
  },
})

export default SettingsScreen