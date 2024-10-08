import React, { useMemo } from 'react';
import { View, Text } from 'react-native';

function MyComponent({ numbers }) {
    const sum = useMemo(() => {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }, [numbers]);

return (
    <View>
        <Text>Sum: {sum}</Text>
    </View>
)
}