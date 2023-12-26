import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import TableHead from './table-head/TableHead';
import TableBody from './table-body/TableBody';
import styles from "./table.style"
import { RootState, User, Users } from '../../types/interface';

const Table = ({ usersArray, searchedUser }: Users) => {
    const [sortedUsers, setSortedUsers] = useState<User[]>([]);
    const [error, setError] = useState<boolean | null>(null);
    const [isAscending, setIsAscending] = useState(true);
    
    const sortByBananas = (array: User[]) => {
        return [...array].sort((a, b) => b.bananas - a.bananas);
    };

    const handleEmptySearch = () => {
        setSortedUsers(sortByBananas(usersArray).slice(0, 10));
    };

    const filterUsersByName = (array: User[]) => {
        return array.filter((user) =>
            user.name.toLowerCase().includes(searchedUser.toLowerCase())
        );
    };

    const handleSearchError = () => {
        setError(true);
    };

    const updateUserHighlights = (updatedUsersArray: User[], filteredUsers: User[]) => {
        updatedUsersArray.forEach((user) => {
            user.highlight = filteredUsers.some((filteredUser) => filteredUser.name === user.name);
        });
    };

    const handleSearchedUser = (updatedUsersArray: User[], filteredUsers: User[]) => {
        const topTen = updatedUsersArray.slice(0, 10);
        const searchedUserIndex = topTen.findIndex(
            (user) => user.name.toLowerCase() === searchedUser.toLowerCase()
        );
    
        if (searchedUserIndex !== -1) {
            setSortedUsers(topTen);
        } else {
            handleNonTopTenUser(updatedUsersArray, filteredUsers, topTen);
        }
    };
    
    const handleNonTopTenUser = (updatedUsersArray: User[], filteredUsers: User[], topTen: User[]) => {
        const newUser = filteredUsers[0];
        const originalRank = updatedUsersArray.findIndex((user) => user.name === newUser.name) + 1;
    
        const userInTopTen = topTen.find((user) => user.name.toLowerCase() === newUser.name.toLowerCase());
    
        if (userInTopTen) {
            setSortedUsers(topTen);
        } else {
            handleAddOrUpdateUser(newUser, topTen, originalRank);
        }
    };
    
    const handleAddOrUpdateUser = (newUser: User, topTen: User[], originalRank: number) => {
        newUser.rank = topTen[topTen.length - 1].bananas < newUser.bananas ? topTen[topTen.length - 1].rank : originalRank;
        topTen.splice(topTen.length - 1, 1, newUser);
        setSortedUsers(topTen);
    };
    
    
    const handleSearch = () => {
        setError(null);
    
        if (searchedUser === '') {
            handleEmptySearch();
            setIsAscending(true); 
            setSortedUsers(sortByBananas(usersArray).slice(0, 10)); 
            return;
        }
    
        const updatedUsersArray = sortByBananas(usersArray);
        const filteredUsers = filterUsersByName(updatedUsersArray);
    
        if (filteredUsers.length === 0) {
            handleSearchError();
            setSortedUsers([]); 
        } else {
            updateUserHighlights(updatedUsersArray, filteredUsers);
            handleSearchedUser(updatedUsersArray, filteredUsers);
            setIsAscending(true);
        }
    };

    const handleSortByName = (array: User[], ascending: boolean) => {
        return ascending
            ? array.sort((a, b) => a.name.localeCompare(b.name))
            : array.sort((a, b) => b.name.localeCompare(a.name));
    };
    
    const handleSortByBananas = (array: User[], ascending: boolean) => {
        return array.sort((a: User, b: User) =>
            ascending ? b.bananas - a.bananas : a.bananas - b.bananas
        );
    };
    
    const handleSort = (sortBy: string) => {
        let updatedUsersArray = [...usersArray]; 
        updatedUsersArray = sortBy === 'name' ? handleSortByName(updatedUsersArray, isAscending) : handleSortByBananas(updatedUsersArray, isAscending);
        updatedUsersArray = updatedUsersArray.slice(0, 10); 
        const totalCount = usersArray.length;
    
        updatedUsersArray.forEach((user, index) => {
            if (sortBy === 'name') {
                const sameBananaUsers = updatedUsersArray.filter(u => u.bananas === user.bananas);
                const sameOrLowerRank = sameBananaUsers.findIndex(u => u.name === user.name);
    
                user.rank = sameOrLowerRank === -1 ? totalCount : totalCount - sameOrLowerRank;
            } else {
                user.rank = isAscending ? index + 1 : totalCount - index;
            }
        });
    
        setSortedUsers(updatedUsersArray);
        setIsAscending(!isAscending);
    };
    
    useEffect(() => {
        const defaultSortedUser = sortByBananas(usersArray).slice(0, 10);
        defaultSortedUser.forEach((user, index) => {
            user.rank = index + 1;
        });
        setSortedUsers(defaultSortedUser);
    }, [usersArray]);

    useEffect(() => {
        handleSearch();
    }, [searchedUser]);


    return (
        <View style={styles.container}>
            <TableHead 
                handleSort={handleSort} 
            />
            <TableBody 
                sortedUsers={sortedUsers} 
                error={error} 
                usersArray={usersArray}
            />
        </View>
    );
};

const mapStateToProps = (state: RootState) => ({
    searchedUser: state.users.searchedUser, 
    usersArray: state.users.usersArray,
});

export default connect(mapStateToProps, null)(Table);