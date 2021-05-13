import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, CREATE_COMMENT_FAIL, CREATE_COMMENT_SUCCESS } from "../actionType";

export const commentListReducer = (
  state = {
    loading: true,
    comments: null,
  },
  { payload, type }
) => {
  switch (type) {
    case COMMENT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_LIST_SUCCESS:
      return {
        ...state,
        comments: payload,
        loading: false
      };
    case COMMENT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CREATE_COMMENT_SUCCESS:
        return {
            ...state,
            loading: false,
            success: true
        }

    case CREATE_COMMENT_FAIL:
        return {
            ...state,
            loading: false,
            success: false
        }
    default:
      return state;
  }
};
