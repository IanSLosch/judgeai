import { View, Image, StyleSheet, Text } from "react-native";
import { LoadingIcon } from "../assets/LoadingIcon.png"
import Constants from 'expo-constants';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.loadingIcon} source={require('../assets/LoadingIcon.png')} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    backgroundColor: '#2F2D2D',
    alignItems: 'center'
  },
  loadingIcon: {
    height: 350,
    width: 350,
    padding: 10,
    marginTop: 100
  },
  loadingText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  }
})

export default LoadingScreen