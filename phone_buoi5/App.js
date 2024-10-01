
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const images = {
    red: require('./assets/vsdo.png'),
    silver: require('./assets/vstrang.png'),
    black: require('./assets/vsden.png'),
    blue: require('./assets/vsxanh.png'),
};

export default function VsmartJoy3Screen() {
    const [showColorSelection, setShowColorSelection] = useState(false);
    const [selectedColor, setSelectedColor] = useState('red');

    const colors = [
        { name: 'Bạc', code: 'silver', image: images.silver },
        { name: 'Đỏ', code: 'red', image: images.red },
        { name: 'Đen', code: 'black', image: images.black },
        { name: 'Xanh dương', code: 'blue', image: images.blue },
    ];

    const selectedColorInfo = colors.find(c => c.code === selectedColor);

    const MainScreen = () => ( <
        ScrollView style = { styles.container } >
        <
        Image source = { selectedColorInfo.image }
        style = { styles.productImage }
        /> <
        View style = { styles.contentContainer } >
        <
        Text style = { styles.productName } > Điện Thoại Vsmart Joy 3 - Hàng chính hãng < /Text> <
        Text style = { styles.selectedColorText } > Màu: { selectedColorInfo.name } < /Text> <
        View style = { styles.ratingContainer } > {
            [1, 2, 3, 4, 5].map((_, index) => ( <
                AntDesign key = { index }
                name = "star"
                size = { 18 }
                color = "#FFC107" / >
            ))
        } <
        Text style = { styles.ratingText } > (Xem 828 đánh giá) < /Text> <
        /View> <
        View style = { styles.priceContainer } >
        <
        Text style = { styles.price } > 1.790 .000 đ < /Text> <
        /View> <
        View style = { styles.promotionContainer } >
        <
        Text style = { styles.promotionText } > Ở ĐÂU RẺ HƠN HOÀN TIỀN < /Text> <
        AntDesign name = "questioncircleo"
        size = { 16 }
        color = "#3F51B5" / >
        <
        /View> <
        TouchableOpacity style = { styles.colorButton }
        onPress = {
            () => setShowColorSelection(true) } >
        <
        Text style = { styles.colorButtonText } > 4 MÀU - CHỌN LOẠI & gt; < /Text> <
        /TouchableOpacity> <
        TouchableOpacity style = { styles.buyButton } >
        <
        Text style = { styles.buyButtonText } > CHỌN MUA < /Text> <
        /TouchableOpacity> <
        /View> <
        /ScrollView>
    );

    const ColorSelectionScreen = () => ( <
        View style = { styles.colorSelectionContainer } >
        <
        Text style = { styles.colorSelectionTitle } > Điện Thoại Vsmart Joy 3 < /Text> <
        Text style = { styles.colorSelectionSubtitle } > Hàng chính hãng < /Text> <
        View style = { styles.selectedColorInfo } >
        <
        Image source = { selectedColorInfo.image }
        style = { styles.smallProductImage }
        /> <
        View style = { styles.selectedColorTextContainer } >
        <
        Text > Màu: { selectedColorInfo.name } < /Text> <
        Text > Cung cấp bởi Tiki Tradding < /Text> <
        Text style = { styles.colorSelectionPrice } > 1.790 .000 đ < /Text> <
        /View> <
        /View> <
        Text style = { styles.chooseColorText } > Chọn một màu bên dưới: < /Text> <
        View style = { styles.colorOptionsContainer } > {
            colors.map((color) => ( <
                TouchableOpacity key = { color.code }
                style = {
                    [styles.colorOption, { backgroundColor: color.code }] }
                onPress = {
                    () => setSelectedColor(color.code) }
                />
            ))
        } <
        /View> <
        TouchableOpacity style = { styles.doneButton }
        onPress = {
            () => setShowColorSelection(false) } >
        <
        Text style = { styles.doneButtonText } > XONG < /Text> <
        /TouchableOpacity> <
        /View>
    );

    return showColorSelection ? < ColorSelectionScreen / > : < MainScreen / > ;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    productImage: {
        width: width,
        height: height * 0.4,
        resizeMode: 'contain',
    },
    contentContainer: {
        padding: 16,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    selectedColorText: {
        fontSize: 14,
        marginBottom: 10,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    ratingText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#2196F3',
    },
    priceContainer: {
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E91E63',
    },
    promotionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    promotionText: {
        color: '#E91E63',
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 6,
    },
    colorButton: {
        borderWidth: 1,
        borderColor: '#757575',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 16,
    },
    colorButtonText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    buyButton: {
        backgroundColor: '#E91E63',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    buyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    colorSelectionContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    colorSelectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    colorSelectionSubtitle: {
        fontSize: 14,
        marginBottom: 16,
    },
    selectedColorInfo: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    smallProductImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    selectedColorTextContainer: {
        marginLeft: 16,
        justifyContent: 'center',
    },
    colorSelectionPrice: {
        fontWeight: 'bold',
        marginTop: 8,
    },
    chooseColorText: {
        marginBottom: 16,
    },
    colorOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    colorOption: {
        width: 60,
        height: 60,
        borderRadius: 4,
    },
    doneButton: {
        backgroundColor: '#1E90FF',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    doneButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
