import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-elements";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('')
  const handlePasswordReset = () => {
    console.log({ 'email': email })
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <KeyboardAvoidingView style={styles.content} behavior={'padding'}>
      <Text style={styles.heading} >Reset Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          secureTextEntry={true}
        />
        <Button buttonStyle={styles.button} title='Reset Password' onPress={handlePasswordReset} />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
})

export default ForgotPasswordScreen