/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order Foods',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];
const NavOption = () => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={item => item.id}
      style={tw`pl-4`}
      renderItem={({item}) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <Image
            style={{width: 120, height: 120, resizeMode: 'contain'}}
            source={{
              uri: item.image,
            }}
          />
          <Text style={tw`text-lg font-bold mt-2 text-black text-left`}>
            {item.title}
          </Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOption;
