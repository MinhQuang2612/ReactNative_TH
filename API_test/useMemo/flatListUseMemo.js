import React, { useMemo } from 'react';
import { FlatList, Text } from 'react-native';

function ItemList({ items }) {
    const filteredItems = useMemo(() => {
        return items.filter(item => item.isActive);
    }, [items]);
      
return (
    <FlatList>
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
    </FlatList>
);
}