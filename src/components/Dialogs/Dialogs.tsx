import style from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import React from "react";
import { DialogsPageType } from "../../Redux/state";

export type DialogItemDataType = {
  id: number;
  name: string;
};

export type DialogMessageType = {
  id?: number;
  message: string;
};

type DialogsPropsType = {
  dataItemsMessage: DialogsPageType;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const { dataItemsMessage } = props;

  const mappedUsers = dataItemsMessage.dialogsUsers.map((item) => (
    <DialogItem key={item.id} name={item.name} id={item.id} />
  ));

  const mappedMessages = dataItemsMessage.dialogsMessages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{mappedUsers}</div>
      <div className={style.dialogsMessages}>{mappedMessages}</div>
    </div>
  );
};
