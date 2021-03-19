import React from 'react';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  return (
      <div className={s.profileInfoWrapper}>
        <div className={s.profileInfoTop}></div>
        <div className={s.descriptionBlock}>
          <div className={s.avatarContainer}>
            {/*<img src='https://robohash.org/tim.png' alt='avatar' />*/}
            <img src={!props.profile.photos.large
                ? `https://robohash.org/${props.profile.fullName}`
                : props.profile.photos.large} alt='avatar' />
          </div>
          <div className={s.descriptionContainer}>
            <h3>
              {/*timur <span>khrustalyov</span>*/
                props.profile.fullName}
            </h3>
          </div>
          <ProfileStatus status={props.status}
                         updateStatus={props.updateStatus} />
        </div>
      </div>
  );
};

export default ProfileInfo;