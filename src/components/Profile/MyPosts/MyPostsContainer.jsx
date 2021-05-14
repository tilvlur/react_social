import MyPosts from './MyPosts';
import {
  addNewPostActionCreator,
  /*addPostActionCreator,
  updateNewPostTextActionCreator,*/
} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {getProfilePage, getUserFullName} from '../../../redux/selectors';

const mapStateToProps = state => ({
  profilePage: getProfilePage(state),
  fullName: getUserFullName(state),
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