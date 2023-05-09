import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, TextInput } from 'react-native'



const Input = () => {
  const [text, onChangeText] = React.useState('')

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Ask me anything...'
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30
  },
})

export default Input