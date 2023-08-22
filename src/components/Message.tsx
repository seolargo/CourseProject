import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setMessage} from '../store/message';

const Message = () => {
  const dispatch = useDispatch();

  const {messages} = useSelector((state: any) => state.messages);
  //It is used to access the Redux store's state within a React component.
  //It allows you to select and extract specific pieces of state from the Redux store and use them in your components.

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{messages}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
