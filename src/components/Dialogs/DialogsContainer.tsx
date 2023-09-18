import React from "react";
import {
  addMessageAC,
  addNewDialogAC,
} from "../../redux/reducers/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { StoreContext } from "../../Context/StoreContext";

type DialogsContainerPropsType = {};

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (
  props
) => {
  return (
    <StoreContext.Consumer>
      {(customStore) => {
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
      }}
    </StoreContext.Consumer>
  );
};
