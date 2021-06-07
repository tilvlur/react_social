import React from 'react';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';
import refreshPhoto from '../../../assets/images/refresh.svg';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  const userAvatar = profile.photos.large;
  const altAvatar = `https://robohash.org/${profile.fullName}`;

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      let selectedFile = e.target.files[0];
      savePhoto(selectedFile);
    }
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
        </div>
      </div>
  );
};

export default ProfileInfo;