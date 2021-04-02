import MyPosts from './MyPosts';
import {
  addNewPostActionCreator,
  /*addPostActionCreator,
  updateNewPostTextActionCreator,*/
} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  profilePage: state.profilePage,
  fullName: state.profilePage.profile.fullName,
});

const mapDispatchToProps = dispatch => {
  return {
    /*updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },*/
    /*addPost: () => {
      dispatch(addPostActionCreator());
    },*/
    addNewPost: (post) => {
      dispatch(addNewPostActionCreator(post))
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;