import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.scss';

const ProfileStatus = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = e => setStatus(e.currentTarget.value);

  return (
      <div className={s.status}>
        {!editMode &&
        <div>
          <span onDoubleClick={props.isOwner && activateEditMode}>
            {props.status || 'Without status'}
          </span>
        </div>
        }
        {editMode &&
        <div>
          <input onBlur={deactivateEditMode}
                 autoFocus={true}
                 onChange={onStatusChange}
                 value={status} />
        </div>
        }
      </div>
  );
};

export default ProfileStatus;