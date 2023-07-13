import React from "react";
import style from "../Dialogs.module.css";
import { DialogMessageType } from "../Dialogs";

export const Message = (props: DialogMessageType) => {
  return <div className={style.dialogsMessage}>{props.message}</div>;
};
