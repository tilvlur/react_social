import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';
import refreshPhoto from '../../../assets/images/refresh.svg';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({
  profile, isDataFormError, status, updateStatus, isOwner,
  savePhoto, saveProfile,
}) => {
  const userAvatar = profile.photos.large;
  const altAvatar = `https://robohash.org/${profile.fullName}`;

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      let selectedFile = e.target.files[0];
      savePhoto(selectedFile);
    }
  };

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    !isDataFormError && setEditMode(false);
  }, [isDataFormError, profile]);

  const onSubmit = (value, actions) => {
    saveProfile(value, actions);

  };

  return (
      <div className={s.profileInfoWrapper}>
        <div className={s.profileInfoTop}></div>
        <div className={s.descriptionBlock}>
          <div className={s.avatarContainer}>
            <img className={s.avatar}
                 src={userAvatar || altAvatar}
                 alt='avatar' />
            {isOwner &&
            <label className={s.refreshPhoto}>
              <img src={refreshPhoto} alt='refresh' title='Refresh photo' />
              <input type='file'
                     accept='image/jpeg'
                     onChange={onMainPhotoSelected} />
            </label>}
          </div>
          <div className={s.descriptionContainer}>
            <h3>{profile.fullName}</h3>
          </div>
          <ProfileStatus status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner} />
          {editMode
              ? <ProfileDataForm profile={profile} onSubmit={onSubmit} />
              : <ProfileData profile={profile}
                             isOwner={isOwner}
                             goToEditMode={() => setEditMode(true)} />}
        </div>
      </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
      <div>
        <div>
          Full name: {profile.fullName}
        </div>
        <div>
          Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
          My professional skills: {profile.lookingForAJobDescription}
        </div>}
        <div>
          About me: {profile.aboutMe}
        </div>
        <div>
          Contacts: {Object.keys(profile.contacts).map(key => {
          return <Contact key={key}
                          contactTitle={key}
                          contactValue={profile.contacts[key]} />;
        })}
        </div>
        <div>
          {isOwner && <button onClick={goToEditMode}>Edit</button>}
        </div>
      </div>
  );
};

const Contact = ({contactTitle, contactValue}) => {
  return <div>
    {contactTitle}: {contactValue}
  </div>;
};

export default ProfileInfo;