import React from 'react';
import s from './ProfileInfo.module.scss';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = e => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
        <div className={s.status}>
          {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || 'Please enter your status here'}
            </span>
          </div>}
          {this.state.editMode &&
          <div>
            <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true}
                   onChange={this.onStatusChange}
                   value={this.state.status} />
          </div>}
        </div>
    );
  }
}

export default ProfileStatus;