import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as ItemContext } from '../context/ItemContext';
import ExampleComponent from 'arenero-native';

const ItemListScreen = () => {
  const { state, fetchItems } = useContext(ItemContext);

  return (
    <View>
      <NavigationEvents onWillFocus={fetchItems} />
      <FlatList
        data={state}
        keyExtractor={item => item.name}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          )
        }}
        />
    </View>
  );
};

export default ItemListScreen;
