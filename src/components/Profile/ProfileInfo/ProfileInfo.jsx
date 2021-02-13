import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
      <div className={s.profileInfoWrapper}>
        <div className={s.profileInfoTop}></div>
        <div className={s.descriptionBlock}>
          <div className={s.avatarContainer}>
            {/*<img src='https://i.pravatar.cc/200' alt='avatar' />*/}
            <img src='https://robohash.org/tim.png' alt='avatar' />
          </div>
          <div className={s.descriptionContainer}>
            <h3>
              timur <span>khrustalyov</span>
            </h3>
          </div>
        </div>
      </div>
  );
};

export default ProfileInfo;