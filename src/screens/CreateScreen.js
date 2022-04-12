import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import { Context } from '../context/ShopContext';

const { width, height } = Dimensions.get('screen');

const CreateScreen = ({navigation}) => {
  // const { state, addItem } = useContext(Context);
  const { addItem } = useContext(Context);
  const [name, onChangeName] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  const [quantity, onChangeQuantity] = React.useState();

  const handleSubmit = () => {
    addItem(name, description, quantity, () => navigation.navigate('Read'))
    
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onChangeName('')
      onChangeDescription('')
      onChangeQuantity()
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder='Name placeholder'
          />
        </View>
        <View style={styles.inputBox}>
          <Text>Description:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeDescription}
            value={description}
            placeholder='Description placeholder'
          />
        </View>
        <View style={styles.inputBox}>
          <Text>Quantity:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeQuantity}
            value={quantity}
            placeholder='Quantity placeholder'
            keyboardType='numeric'
          />
        </View>
        <View style={styles.buttonBox}>
          <Button
            onPress={handleSubmit}
            title='Submit'
            color='#841584'
            accessibilityLabel='Learn more about this purple button'
          />
        </View>
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  inputBox: {
    width: width * 0.9,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    marginVertical: '2%',
    borderWidth: 1,
    padding: 10,
  },
  buttonBox: {
    marginTop: '4%',
    paddingHorizontal: '5%',
  },
});
