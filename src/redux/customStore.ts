import {
  AddNewPostACType,
  AddPostACType,
  profileReducer,
} from "./reducers/profile-reducer";
import {
  AddMessageType,
  AddNewDialogACType,
  dialogsReducer,
} from "./reducers/dialogs-reducer";

type DialogsUserType = {
  id: number;
  name: string;
};

export type DialogsMessagesType = {
  id: number;
  message: string;
};

export type DialogsPageType = {
  dialogsUsers: DialogsUserType[];
  dialogsMessages: DialogsMessagesType[];
  dialogsText: string;
};

export type PostType = {
  id: number;
  message: string;
  likeCount: number;
};

export type ProfilePageType = {
  postData: PostType[];
  postText: string;
};

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

type ObserverType = (state: StateType) => void;

export type ActionsType =
  | AddPostACType
  | AddNewPostACType
  | AddNewDialogACType
  | AddMessageType;

type StoreType = {
  _state: StateType;
  getState: () => StateType;
  _callSubscriber: (state: StateType) => void;
  subscribe: (observer: ObserverType) => void;
  dispatch: (action: ActionsType) => void;
};

const customStore: StoreType = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, likeCount: 15, message: "yo" },
        { id: 2, likeCount: 20, message: "Good idea!" },
      ],
      postText: "",
    },
    dialogsPage: {
      dialogsUsers: [
        { id: 1, name: "Maksim" },
        { id: 2, name: "Nikita" },
        { id: 3, name: "Dima" },
      ],
      dialogsMessages: [
        { id: 1, message: "Hello, how are you" },
        { id: 2, message: "My name is Maksim" },
        { id: 3, message: "I'm great, Thanks!" },
      ],

      dialogsText: "",
    },
  },
  _callSubscriber() {
    console.log("state change");
  },

  getState() {
    return this._state;
  },

  subscribe(observer: ObserverType) {
    this._callSubscriber = observer;
  },

  dispatch(action: ActionsType) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default customStore;
