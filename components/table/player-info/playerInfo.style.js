import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/styles";

const styles = StyleSheet.create({
    userRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray2,
        paddingVertical: 17,
        paddingHorizontal: 25,
    },
    highlight: {
        backgroundColor: COLORS.secondary
    },
    textHighlight: {
        color:  COLORS.white,
        fontWeight: 'bold',
    },
    userInfo: {
        textAlign: 'center',
    },
    userInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;