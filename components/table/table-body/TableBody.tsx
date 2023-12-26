import { View, Text, FlatList, SafeAreaView, useWindowDimensions } from 'react-native';
import { connect } from 'react-redux';
import styles from "./tablebody.style"
import PlayerInfo from '../player-info/PlayerInfo';
import { RootState, TableBodyProps } from '../../../types/interface';

const TableBody = ({ sortedUsers, error }: TableBodyProps) => {
    const windowDimensions = useWindowDimensions();

    const contentContainerStyle = sortedUsers.length > 0 && { maxHeight: windowDimensions.height };

    const renderEmptyComponent = () => {
        if (error) {
            return (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>No player found{'\n'}{'\n'}Please specify an existing username!</Text>
                </View>
            );
        }
        return null;
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={sortedUsers}
                keyExtractor={(item) => item.uid}
                renderItem={({ item }) => <PlayerInfo item={item} />}
                ListEmptyComponent={renderEmptyComponent}
                contentContainerStyle={contentContainerStyle}
            />
        </SafeAreaView>
    );
};

const mapStateToProps = (state: RootState) => ({
    searchedUser: state.users.searchedUser, 
});

export default connect(mapStateToProps, null)(TableBody);
