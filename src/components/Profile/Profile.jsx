import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
      <div>
        <ProfileInfo profile={props.profile}
                     authLogin={props.authLogin}
                     isDataFormError={props.isDataFormError}
                     status={props.status}
                     isFetching={props.isFetching}
                     updateStatus={props.updateStatus}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile} />
        <MyPostsContainer />
      </div>
  );
};

export default Profile;