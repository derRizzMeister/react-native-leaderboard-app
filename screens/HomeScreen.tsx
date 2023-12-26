import { StyleSheet, View } from 'react-native'
import Header from '../components/header/Header'
import Table from '../components/table/Table'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Table />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;