import React, { useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';

function Child({ onPress }) {
    return <Button title="Click me" onPress={onPress} />;
}

function Parent() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Child onPress={increment} />
        </View>
    );
}