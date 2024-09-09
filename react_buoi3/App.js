import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

const YourApp = () => {
  // Tạo trạng thái để lưu ảnh đã chọn
  const [selectedImage, setSelectedImage] = useState(null);

  // Hàm xử lý khi nhấn vào menu
  const handlePress = (animal, imageUrl) => {
    setSelectedImage(imageUrl);  // Cập nhật ảnh dựa trên lựa chọn
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        {/* Ảnh chó */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Chó', 'https://picsum.photos/id/237/200/200')}>
          <Text style={styles.menuText}>Chó</Text>
        </TouchableOpacity>

        {/* Ảnh mèo */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Mèo', 'https://images.kienthuc.net.vn/zoomh/800/uploaded/hongngan/2017_01_11/B/kho-do-nhung-con-meo-cung-tuc-gian-voi-ca-the-gioi.jpg')}>
          <Text style={styles.menuText}>Mèo</Text>
        </TouchableOpacity>

        {/* Ảnh ngựa */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Ngựa', 'https://photo.znews.vn/w660/Uploaded/znottb/2014_01_30/anh6.jpg')}>
          <Text style={styles.menuText}>Ngựa</Text>
        </TouchableOpacity>

        {/* Ảnh hổ */}
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Hổ', 'https://afamilycdn.com/2019/8/15/d8cwstzucaa7lq5-1565809786035371952216.jpg')}>
          <Text style={styles.menuText}>Hổ</Text>
        </TouchableOpacity>
      </View>

      {/* Hiển thị ảnh đã chọn bên dưới */}
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.selectedImage}
        />
      )}

      <TextInput style={styles.textip} placeholder="Write your comment!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuContainer: {
    flexDirection: 'row',       // Đặt các mục menu nằm ngang
    justifyContent: 'space-around', // Căn đều các mục menu
    width: '100%',              // Chiếm toàn bộ chiều ngang màn hình
    paddingHorizontal: 10,     // Thêm khoảng cách ở hai bên
  },

  menuItem: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },

  menuText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  selectedImage: {
    width: 200,  // Kích thước của ảnh hiển thị
    height: 200,
    marginTop: 20, // Khoảng cách từ menu xuống ảnh
    borderRadius: 10,
  },
  
  textip: {
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 5,
    width: '80%', // Đặt chiều rộng của TextInput
  },
});

export default YourApp;
