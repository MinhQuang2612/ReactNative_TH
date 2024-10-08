import React from 'react';
import { View, Text, TextInput } from 'react-native';
import useInput from './useInput';

function InputComponent() {
    const input = useInput('');

    return (
        <View>
            <TextInput 
                value={input.value}
                onChangeText={input.onChangeText}
                placeholder="Type something"/>
            <Text>{input.value}</Text>
        </View>
    );
}