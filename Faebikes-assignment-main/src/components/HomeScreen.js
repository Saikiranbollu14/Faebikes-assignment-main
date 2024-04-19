import React from 'react'
import {View, StyleSheet, Button} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Button title="Food" onPress={() => navigation.navigate('Food')} />
      <Button
        title="Instamart"
        onPress={() => navigation.navigate('Instamart')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})

export default HomeScreen
