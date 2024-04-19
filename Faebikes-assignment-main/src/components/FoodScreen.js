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
  {id: '1', name: 'Restaurant One', image: 'path-to-image-1.png'},
  {id: '2', name: 'Restaurant Two', image: 'path-to-image-2.png'},
  // Add more data as needed
]

const FoodScreen = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.item}>
          <Image source={require(`./${item.image}`)} style={styles.image} />
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

export default FoodScreen
