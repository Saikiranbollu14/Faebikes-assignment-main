import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={require('./path-to-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to SwiggyClone</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
      />
      <Button title="Send OTP" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
})

export default LoginScreen
