import React from "react";
import { CustomStoreType } from "../../redux/customStore";
import {
  addMessageAC,
  addNewDialogAC,
} from "../../redux/reducers/dialogs-reducer";
import { Dialogs } from "./Dialogs";

type DialogsContainerPropsType = {
  customStore: CustomStoreType;
};

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (
  props
) => {
  const { customStore } = props;

  const dialogsPage = customStore.getState().dialogsPage;

  const onChangeTextArea = (text: string) => {
    customStore.dispatch(addNewDialogAC(text));
  };

  const onClickAddMessage = () => {
    customStore.dispatch(addMessageAC(dialogsPage.dialogsText));
  };

  return (
    <Dialogs
      dialogsPage={dialogsPage}
      onChangeTextArea={onChangeTextArea}
      onClickAddMessage={onClickAddMessage}
    />
  );
};
