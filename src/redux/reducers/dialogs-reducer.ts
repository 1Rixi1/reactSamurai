import {
  ActionsType,
  DialogsMessagesType,
  DialogsPageType,
} from "../customStore";

const initialState: DialogsPageType = {
  dialogsUsers: [],
  dialogsMessages: [],
  dialogsText: "",
};

export const dialogsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case "ADD-NEW-DIALOG": {
      state.dialogsText = action.payload.newDialog;

      return { ...state };
    }

    case "ADD-MESSAGE": {
      const newMessage: DialogsMessagesType = {
        id: Math.random(),
        message: action.payload.newMessage,
      };

      state.dialogsMessages.push(newMessage);
      return { ...state };
    }

    default:
      return state;
  }
};

export type AddNewDialogACType = ReturnType<typeof addNewDialogAC>;

export type AddMessageType = ReturnType<typeof addMessageAC>;

export const addNewDialogAC = (newDialog: string) => {
  return {
    type: "ADD-NEW-DIALOG",
    payload: {
      newDialog,
    },
  } as const;
};

export const addMessageAC = (newMessage: string) => {
  return {
    type: "ADD-MESSAGE",
    payload: {
      newMessage,
    },
  } as const;
};
