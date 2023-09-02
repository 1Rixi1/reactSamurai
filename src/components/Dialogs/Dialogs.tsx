import style from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import React, { ChangeEvent } from "react";
import { ActionsType, DialogsPageType } from "../../redux/customStore";
import {
  addMessage,
  addNewDialogAC,
} from "../../redux/reducers/dialogs-reducer";

export type DialogItemDataType = {
  id: number;
  name: string;
};

export type DialogMessageType = {
  id?: number;
  message: string;
};

type DialogsPropsType = {
  dialogsPage: DialogsPageType;
  dispatch: (action: ActionsType) => void;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const { dialogsPage, dispatch } = props;

  const mappedUsers = dialogsPage.dialogsUsers.map((item) => (
    <DialogItem key={item.id} name={item.name} id={item.id} />
  ));

  const mappedMessages = dialogsPage.dialogsMessages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(addNewDialogAC(e.currentTarget.value));
  };

  const onClickAddMessageHandler = () => {
    dispatch(addMessage(dialogsPage.dialogsText));
  };

  return (
    <>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>{mappedUsers}</div>
        <div className={style.dialogsMessages}>{mappedMessages}</div>
      </div>

      <div>
        <textarea
          value={dialogsPage.dialogsText}
          onChange={onChangeTextAreaHandler}
        ></textarea>
        <div>
          <button onClick={onClickAddMessageHandler}>Add</button>
        </div>
      </div>
    </>
  );
};
