import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/styles";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        paddingTop: 8,
        borderColor: COLORS.gray2,
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headText: {
        marginHorizontal: 9,
    },
    filterIcon: {
        height: '100%',
    },
    pressed: {
        opacity: 0.75,
    }
});

export default styles;