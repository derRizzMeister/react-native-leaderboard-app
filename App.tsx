import store from './reducers';
import { useEffect } from 'react';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { fetchUsers } from './utils';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { COLORS } from './constants/styles';


export default function App() {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: 35,
  },
});
