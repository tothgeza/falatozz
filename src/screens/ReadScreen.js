import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/ShopContext';

const ReadScreen = () => {
  const { state, addItem } = useContext(Context);

  return (
    <View>
      {state.map((item, index) => {
        return (
          <View key={index.toString()} style={styles.itemBox}>
            <Text>Name: {item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ReadScreen;

const styles = StyleSheet.create({
    itemBox: {
        margin: '2%',
        borderRadius: 6,
        backgroundColor: 'white',
        padding: '2%'
    }
});
