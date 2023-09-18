import style from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import React, { ChangeEvent } from "react";
import { DialogsPageType } from "../../redux/customStore";

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
  onClickAddMessage: () => void;
  onChangeTextArea: (text: string) => void;
};

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
  const { dialogsPage, onClickAddMessage, onChangeTextArea } = props;

  const mappedUsers = dialogsPage.dialogsUsers.map((item) => (
    <DialogItem key={item.id} name={item.name} id={item.id} />
  ));

  const mappedMessages = dialogsPage.dialogsMessages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChangeTextArea(e.currentTarget.value);
  };

  const onClickAddMessageHandler = () => {
    onClickAddMessage();
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
