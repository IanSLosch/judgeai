import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import constants from "../utility/constants";

const LoadingBar = () => {
  const progress = useRef(new Animated.Value(0)).current

  const animateProgress = () => {
    Animated.timing(progress, {
      toValue: 100,
      duration: constants.LOADING_LENGTH_IN_MILLISECONDS,
      useNativeDriver: false
    }).start()
  }
  
  useEffect(() => {
    animateProgress()
  }, [])

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progressIndicator, {width}]} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1f1f1f'
  },
  progressIndicator: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#798683'
  }
})

export default LoadingBar