import userReducer from './Users';
import { SET_SEARCHED_USER, SET_USERS } from '../constants/actionTypes/actionTypes';

describe('userReducer', () => {
    // Initial State TEST
  it('should return initial state', () => {
    const initialState = {
      searchedUser: '',
      usersArray: [],
    };

    const state = userReducer(undefined, {});

    expect(state).toEqual(initialState);
  });

// Actions TEST
  it('should handle SET_SEARCHED_USER action', () => {
    const currentState = {
      searchedUser: '',
      usersArray: [],
    };
    const action = {
      type: SET_SEARCHED_USER,
      payload: 'username',
    };
    const expectedState = {
      ...currentState,
      searchedUser: 'username',
    };

    const state = userReducer(currentState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle SET_USERS action', () => {
    const currentState = {
      searchedUser: '',
      usersArray: [],
    };
    const action = {
      type: SET_USERS,
      users: ['user1', 'user2'],
    };
    const expectedState = {
      ...currentState,
      usersArray: ['user1', 'user2'],
    };

    const state = userReducer(currentState, action);

    expect(state).toEqual(expectedState);
  });
});
