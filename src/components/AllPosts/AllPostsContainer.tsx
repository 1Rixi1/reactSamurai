import { addNewPostAC, addPostAC } from "../../redux/reducers/profile-reducer";
import AllPosts from "./AllPosts";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootReducerType } from "../../redux/redux-store";

const mapStateToProps = (state: RootReducerType) => {
  return {
    profilePage: state.profilePage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onChangeTextArea: (text: string) => {
      debugger;
      dispatch(addNewPostAC(text));
    },
    onClickAddPost: (postText: string) => {
      dispatch(addPostAC(postText));
    },
  };
};

export const AllPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
