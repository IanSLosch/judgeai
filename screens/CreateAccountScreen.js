import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-elements";


const CreateAccountScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateAccount = () => {
    console.log({ 'email': email, 'password': password })
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <KeyboardAvoidingView style={styles.content} behavior={'padding'}>
        <Text style={styles.heading} >Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button buttonStyle={styles.button} title='Create Account' onPress={handleCreateAccount} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: '#AD1457',
    padding: 12,
    borderRadius: 4,
    marginTop: 32,
  },
  content: {
    marginTop: 15,
    fontSize: 24,
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%',
  },
})

export default CreateAccountScreen