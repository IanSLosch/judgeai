import { View, Image, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import LoadingBar from "../components/LoadingBar";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.loadingIcon} source={require('../assets/LoadingIcon.png')} />
      <View style={styles.loadingBar} >
        <LoadingBar />
      </View>
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
  loadingBar: {
    marginTop: 35
  }
})

export default LoadingScreen