const FOLLOW = "FOLLOWER";
const UNFOLLOW = "UNFOLOWER";
const SET_USERS = "SET_USERS";
let initialState = {
  users: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
};

export const followAC = (usersId) => ({ type: FOLLOW, usersId });
export const unFollowAC = (usersId) => ({ type: UNFOLLOW, usersId });
export const setUSersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
