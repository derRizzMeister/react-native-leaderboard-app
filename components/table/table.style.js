import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
  },
  row: {
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderColor: COLORS.gray2,
  },
  cell: {
      flex: 1,
      textAlign: 'center',
      padding: 10,
  },
});

export default styles;