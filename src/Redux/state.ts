type ProfilePageType = {
  postData: { id: number; likeCount: number }[];
};
export type DialogsPageType = {
  dialogsUsers: { id: number; name: string }[];
  dialogsMessages: { id: number; message: string }[];
};

export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

const state: StateType = {
  profilePage: {
    postData: [
      { id: 1, likeCount: 15 },
      { id: 2, likeCount: 20 },
    ],
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
  },
};

export default state;
