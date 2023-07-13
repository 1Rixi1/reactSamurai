import React from "react";
import style from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { DialogItemDataType } from "../Dialogs";

export const DialogItem = (props: DialogItemDataType) => {
  const path = `/dialogs${props.id}`;

  return (
    <div className={`${style.DialogsItem} ${style.dialogsItemActive}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
