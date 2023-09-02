import { ActionsType, PostType, ProfilePageType } from "../customStore";

const initialState: ProfilePageType = {
  postData: [],
  postText: "",
};

export const profileReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case "ADD-POST": {
      const newId = Math.random();

      const newPost: PostType = {
        id: Number(newId),
        message: action.payload.newText,
        likeCount: 0,
      };

      state.postData.push(newPost);
      state.postText = "";

      return state;
    }

    case "ADD-NEW-POST": {
      state.postText = action.payload.newPost;

      return state;
    }

    default:
      return state;
  }
};

export type AddPostACType = ReturnType<typeof addPostAC>;

export type AddNewPostACType = ReturnType<typeof addNewPostAC>;

export const addPostAC = (newText: string) => {
  return {
    type: "ADD-POST",
    payload: {
      newText,
    },
  } as const;
};

export const addNewPostAC = (newPost: string) => {
  return {
    type: "ADD-NEW-POST",
    payload: {
      newPost,
    },
  } as const;
};
