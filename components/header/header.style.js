import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants/styles";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    backgroundColor: COLORS.primary,
  },
  userName: {
    fontSize: SIZES.large,
    color: COLORS.gray,
  },
  welcomeMessage: {
    fontWeight: 'bold',
    fontSize: SIZES.xLarge,
    color: COLORS.black,
    marginTop: 4,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    marginTop: 12,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    ...SHADOWS.small,
  },  
  searchInput: {
    width: "80%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 12,
},
  searchBtn: {
    width: 60,
    height: "100%",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.small,
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
});

export default styles;