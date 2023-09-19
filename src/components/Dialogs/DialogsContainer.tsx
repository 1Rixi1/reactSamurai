import {
  addMessageAC,
  addNewDialogAC,
} from "../../redux/reducers/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { RootReducerType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: RootReducerType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onClickAddMessage: (dialogsText: string) => {
      dispatch(addMessageAC(dialogsText));
    },
    onChangeTextArea: (text: string) => {
      dispatch(addNewDialogAC(text));
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
