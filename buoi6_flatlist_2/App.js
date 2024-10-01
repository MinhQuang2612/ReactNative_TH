import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons'; // Import icon libraries

const data = [
  {
    id: '1', 
    name: 'Cáp chuyển đổi USB sang PS2',
    price: '69.900 đ',
    rating: 4.5,
    reviews: 15,
    discount: '-39%',
    image: require('./assets/carbusbtops2 1.png'),  
  },
  {
    id: '2',
    name: 'Cáp chuyển đổi USB sang PS2',
    price: '59.900 đ',
    rating: 4.2,
    reviews: 10,
    discount: '-30%',
    image: require('./assets/daucam 1.png'),  
  },
  {
    id: '3',
    name: 'Cáp chuyển đổi USB sang PS2',
    price: '49.900 đ',
    rating: 4.8,
    reviews: 20,
    discount: '-20%',
    image: require('./assets/dauchuyendoi 1.png'),  
  },
  {
    id: '4',
    name: 'Cáp chuyển đổi USB sang PS2',
    price: '79.900 đ',
    rating: 4.6,
    reviews: 12,
    discount: '-25%',
    image: require('./assets/dauchuyendoipsps2 1.png'),  
  },
  {
    id: '5',
    name: 'Cáp chuyển đổi USB sang PS2',
    price: '39.900 đ',
    rating: 4.3,
    reviews: 8,
    discount: '-15%',
    image: require('./assets/daynguon 1.png'),  
  },
  {
    id: '6',
    name: 'Cáp chuyển đổi USB sang PS2',
    price: '89.900 đ',
    rating: 4.7,
    reviews: 18,
    discount: '-40%',
    image: require('./assets/giacchuyen 1.png'),  
  },
];

// Hàm để hiển thị các ngôi sao dựa trên rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Số ngôi sao đầy đủ
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Nửa ngôi sao
  const emptyStars = 5 - fullStars - halfStars; // Số ngôi sao trống

  return (
    <View style={styles.starRow}>
      {[...Array(fullStars)].map((_, index) => (
        <Ionicons key={`full-${index}`} name="star" size={12} color="#FFD700" />
      ))}
      {halfStars === 1 && <Ionicons name="star-half" size={12} color="#FFD700" />}
      {[...Array(emptyStars)].map((_, index) => (
        <Ionicons key={`empty-${index}`} name="star-outline" size={12} color="#FFD700" />
      ))}
    </View>
  );
};

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <View style={styles.ratingRow}>
      {renderStars(item.rating)} 
      <Text style={styles.reviews}>({item.reviews})</Text>
    </View>
    <Text style={styles.price}>{item.price}</Text>
    <Text style={styles.discount}>{item.discount}</Text>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="arrow-back" size={24} color="white" /> 
        </TouchableOpacity>
        <TextInput style={styles.searchInput} placeholder="Dây cáp usb" />
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="shopping-cart" size={24} color="white" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Entypo name="dots-three-horizontal" size={24} color="white" /> 
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Entypo name="home" size={24} color="white" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Entypo name="back" size={24} color="white" /> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#00AEEF',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  starRow: {
    flexDirection: 'row',
  },
  reviews: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  discount: {
    fontSize: 12,
    color: '#ff0000',
  },
  listContent: {
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#00AEEF',
  },
  footerIcon: {
    paddingHorizontal: 15,
  },
});

export default App;
