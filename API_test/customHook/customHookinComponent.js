import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import useFetch from './useFetch';

function DataComponent() {
    const { data, loading, error } = useFetch('https://api.example.com/data');

    if (loading) return <ActivityIndicator />;
    

    if (error) return <Text>Error: {error.message}</Text>;
    
    return (
        <View>
            {data && data.map(item => (
                <Text key={item.id}>{item.name}</Text>
            ))}
        </View>
    );
}

export default DataComponent;
