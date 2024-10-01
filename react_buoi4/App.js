import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import nguyenham from './assets/nguyenham.png';

const ShoppingCartScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const originalPrice = 441800;
  const discountedPrice = 141800;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Product Image and Title */}
      <View style={styles.productContainer}>
        <Image
          source={nguyenham} // Use the local image
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productProvider}>Cung cấp bởi Tiki Trading</Text>
          {/* Display discounted price above original price */}
          <Text style={styles.productPrice}>{discountedPrice.toLocaleString()} đ</Text>
          <Text style={styles.originalPrice}>{originalPrice.toLocaleString()} đ</Text>
        </View>
      </View>

      {/* Quantity Selector and Buy Later */}
      <View style={styles.quantityBuyLaterContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.buyLaterText}>Mua sau</Text>
        </TouchableOpacity>
      </View>

      {/* Saved Discount Code */}
      <View style={styles.savedDiscountContainer}>
        <Text>Mã giảm giá đã lưu</Text>
        <TouchableOpacity>
          <Text style={styles.viewText}>Xem tại đây</Text>
        </TouchableOpacity>
      </View>

      {/* Discount Code */}
      <View style={styles.discountContainer}>
        <TextInput style={styles.discountInput} placeholder="Mã giảm giá" />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      {/* Gift Voucher Section */}
      <View style={styles.giftVoucherContainer}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <TouchableOpacity>
          <Text style={styles.viewText}>Nhập tại đây</Text>
        </TouchableOpacity>
      </View>

      {/* Subtotal */}
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Tạm tính</Text>
        <Text style={styles.subtotalPrice}>{(discountedPrice * quantity).toLocaleString()} đ</Text>
      </View>

      {/* Total Amount */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalPrice}>{(discountedPrice * quantity).toLocaleString()} đ</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 100,
    height: 130,
    marginRight: 20,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productProvider: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 18,
    color: 'red',
    marginBottom: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  quantityBuyLaterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  buyLaterText: {
    fontSize: 14,
    color: '#0066ff',
  },
  savedDiscountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  viewText: {
    color: '#0066ff',
  },
  discountContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  applyButton: {
    backgroundColor: '#0066ff',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  giftVoucherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subtotalText: {
    fontSize: 16,
  },
  subtotalPrice: {
    fontSize: 16,
    color: 'red',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShoppingCartScreen;