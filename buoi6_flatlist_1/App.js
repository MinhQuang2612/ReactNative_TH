import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

const ProductItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.shop}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const dummyData = [
        { id: '1', title: 'Ca nấu lẩu, nấu mì mini...', shop: 'Shop Hồ Minh Hậu', image: require('./assets/ca_nau_lau.png') },
        { id: '2', title: '1KG KHÔ GÀ BƠ TỎI ...', shop: 'Shop LTD Food', image: require('./assets/ga_bo_toi.png') },
        { id: '3', title: 'Xe cần cẩu đa năng', shop: 'Shop Thế giới đồ chơi', image: require('./assets/xa_can_cau.png') },
        { id: '4', title: 'Đồ chơi dạng mô hình', shop: 'Shop Thế giới đồ chơi', image: require('./assets/do_choi_dang_mo_hinh.png') },
        { id: '5', title: 'Lãnh đạo giản đơn', shop: 'Shop Minh Long Book', image: require('./assets/lanh_dao_gian_don.png') },
        { id: '6', title: 'Hiểu lòng con trẻ', shop: 'Shop Minh Long Book', image: require('./assets/hieu_long_con_tre.png') },
      ];
      setProducts(dummyData);
    };

    fetchProducts();
  }, []);

  const renderItem = ({ item }) => <ProductItem item={item} />;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Entypo name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Entypo name="menu" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialIcons name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Entypo name="back" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00bfff',
    padding: 15,
    paddingVertical: 8
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoTextContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shop: {
    fontSize: 14,
    color: 'gray',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#00bfff',
    paddingVertical: 2
  },
  footerButton: {
    padding: 10,
  },
});

export default ProductList;