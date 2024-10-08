import React, { useRef } from 'react';
import { View, TextInput, Button } from 'react-native';

const MyComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View>
      <TextInput ref={inputRef} placeholder="Type here" />
      <Button title="Focus Input" onPress={focusInput} />
    </View>
  );
};
