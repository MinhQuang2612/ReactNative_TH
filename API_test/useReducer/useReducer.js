import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <View>
            <Text>Count: {state.count}</Text>
            <Button title="Increase" onPress={() => dispatch({ type: 'increase' })} />
            <Button title="Decrease" onPress={() => dispatch({ type: 'decrease' })} />
        </View>
    );
};