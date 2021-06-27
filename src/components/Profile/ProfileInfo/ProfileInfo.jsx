import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';
import refreshPhoto from '../../../assets/images/refresh.svg';
import ProfileDataForm from './ProfileDataForm';
import {Button} from '../../common/FormsControls/FormsControls';

const ProfileInfo = ({
  profile, authLogin, isDataFormError, status, updateStatus, isOwner,
  savePhoto, saveProfile, isFetching,
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
        <div className={s.descriptionTop}>
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
          <div className={s.fullNameContainer}>
            <h3>{profile.fullName}</h3>
          </div>
          <ProfileStatus status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner} />
        </div>
        <div className={s.descriptionBottomWrapper}>
          <div>
            {!editMode
                ? <ProfileData profile={profile}
                               isOwner={isOwner}
                               goToEditMode={() => setEditMode(true)} />
                : <ProfileDataForm profile={profile}
                                   onSubmit={onSubmit}
                                   isFetching={isFetching} />
            }
          </div>
        </div>
      </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
      <div className={s.profileDataWrapper}>
        <div className={s.profileData}>

          <div className={s.profileDataBlock}>
            <div className={s.profileDataHeaders}>
              <span>profile info</span>
            </div>

            <div className={s.blockData}>
              <span className={s.blockUnitTitle}>Full name:</span>
              <span className={s.blockUnitValue}>{profile.fullName}</span>
            </div>
            <div className={s.blockData}>
              <span className={s.blockUnitTitle}>Looking for a job:</span>
              <span className={s.blockUnitValue}>{profile.lookingForAJob
                  ? 'yes'
                  : 'no'}</span>
            </div>

            {profile.lookingForAJob &&
            <div className={s.blockDataDescription}>
              <span className={s.blockUnitTitle}>My professional skills:</span>
              <div className={s.blockUnitDescription}>
                {profile.lookingForAJobDescription}
              </div>
            </div>}

            <div className={s.blockDataDescription}>
              <span className={s.blockUnitTitle}>About me:</span>
              <div className={s.blockUnitDescription}>
                {profile.aboutMe ? profile.aboutMe : <span>🙊🙊🙊</span>}
              </div>
            </div>
          </div>

          <div className={s.profileDataBlock}>
            <div className={s.profileDataHeaders}>
              <span>contacts</span>
            </div>
            {Object.keys(profile.contacts).map(key => {
              return <Contact key={key}
                              contactTitle={key}
                              contactValue={profile.contacts[key]} />;
            })}
          </div>
        </div>

        <div className={s.buttonWrapper}>
          {isOwner && <Button onClick={goToEditMode}>Edit</Button>}
        </div>
      </div>
  );
};

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.blockData}>
    <span className={s.blockUnitTitle}>
      {contactTitle}:
    </span>
    <span className={s.blockUnitValue}>
      {contactValue ? contactValue : <span>🙊🙊🙊</span>}
    </span>
  </div>;
};

export default ProfileInfo;