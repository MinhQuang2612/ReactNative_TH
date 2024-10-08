import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';

function MyComponent() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment Count" onPress={increment} />
        </View>
    );  
}