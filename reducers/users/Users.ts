export const SET_SEARCHED_USER = 'SET_SEARCHED_USER';
export const SET_USERS = 'SET_USERS';
import { User } from '../../types/interface';

// State
const defaultState = {
    searchedUser: '',
    usersArray: [],
};

// Actions
export const setSearchUser = (user: string) => ({
    type: SET_SEARCHED_USER,
    payload: user,
});

export const setUsers = (users: User[]) => ({
    type: SET_USERS,
    users,
});

// Reducers
const userReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case SET_SEARCHED_USER:
            return {
            ...state,
            searchedUser: action.payload,
            };
        case SET_USERS:
            return {
                ...state,
                usersArray: action.users,
            }
        default:
            return state;
    }
};

export default userReducer;