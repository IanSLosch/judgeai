import { Text, View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";



const SettingsScreen = () => {
  
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
    <View style={styles.container}>
      <Text style={styles.text}>You have entered the danger zone...</Text>
      <Button 
      title={'Delete Account'}
      onPress={() => deleteAccount()}
      containerStyle={{
        width: 150,
        marginHorizontal: 50,
        marginVertical: 10
      }}
      buttonStyle={{
        backgroundColor: '#AD1457',
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    marginTop: 10,
    fontSize: 24
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  }
})

export default SettingsScreen