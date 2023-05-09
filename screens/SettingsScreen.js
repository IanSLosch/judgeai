import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";



const SettingsScreen = () => {
  return (

    <View style={styles.container}>
      <Text style={styles.content}>Settings</Text>
      <Text style={styles.text}>You have entered the danger zone...</Text>
      <Button 
      title={'Delete Account'}
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
    alignItems: 'center'
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