import { useState } from "react";
import { ScrollView, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";



const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log({ 'email': email, 'password': password })
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <KeyboardAvoidingView style={styles.content} behavior={'padding'}>
        <Text style={styles.heading} >Login</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>forgot password?</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Button buttonStyle={styles.button} title='Create Account' onPress={() => navigation.navigate('CreateAccount')} />
          <Button buttonStyle={styles.button} title='Login' onPress={handleLogin} />
        </View>
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
  createAccount: {
    marginRight: 'auto',
    color: 'blue'
  },
  forgotPassword: {
    color: 'blue'
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

})

export default LoginScreen