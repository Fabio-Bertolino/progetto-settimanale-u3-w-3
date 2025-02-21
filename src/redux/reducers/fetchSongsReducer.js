import {
  IS_LOADING_OFF,
  IS_LOADING_ON,
  SET_FIRST_ROW_SONGS,
  SET_SECOND_ROW_SONGS,
  SET_THIRD_ROW_SONGS,
  SET_QUERY_ROW_SONGS,
} from "../actions";

const initialState = {
  firstRowContent: [],
  secondRowContent: [],
  thirdRowContent: [],
  queryRowContent: null,
  isLoading: false,
};

const fetchSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_ROW_SONGS:
      return {
        ...state,
        firstRowContent: action.payload,
      };
    case SET_SECOND_ROW_SONGS:
      return {
        ...state,
        secondRowContent: action.payload,
      };
    case SET_THIRD_ROW_SONGS:
      return {
        ...state,
        thirdRowContent: action.payload,
      };
    case SET_QUERY_ROW_SONGS:
      return {
        ...state,
        queryRowContent: action.payload,
      };
    case IS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case IS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default fetchSongsReducer;
