import users from "../constants/data/leaderboard.json";
import { setUsers } from '../reducers/users/Users';
import store from '../reducers/index';

export const fetchUsers = () => {
    const usersArray = Object.values(users);
    store.dispatch(setUsers(usersArray));
};