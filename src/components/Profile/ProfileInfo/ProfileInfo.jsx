import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
      <div className={s.profileInfoWrapper}>
        <div className={s.profileInfoTop}></div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>
  )
}

export default ProfileInfo;