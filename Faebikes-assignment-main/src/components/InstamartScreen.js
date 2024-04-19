import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

const data = [
  {id: '1', name: 'Milk', image: require('./assets/milk.png')},
  {id: '2', name: 'Bread', image: require('./assets/bread.png')},
  {id: '3', name: 'Eggs', image: require('./assets/eggs.png')},
  {id: '4', name: 'Apples', image: require('./assets/apples.png')},
]

const InstamartScreen = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.list}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#fff', // Adds a white background to each item
    borderRadius: 5, // Rounded corners for the items
    shadowColor: '#000', // Adds shadow for 3D effect
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 2},
    elevation: 3, // Elevation for Android
    padding: 10, // Padding inside each item
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
})

export default InstamartScreen
