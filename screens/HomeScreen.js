import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';
const HomeScreen = () => {
  return (
    <View style={tw`bg-white h-full`}>
      <Text style={tw`text-red-500 p-10`}>I'm a home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
