import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
const HomeScreen = () => {
  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
