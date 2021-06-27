import React from 'react';
import s from './FormsControls.module.scss';

export const Input = ({children, field, form, ...props}) => {

  const fieldName = (/(?<=\.)\w+/.test(field.name) && field.name.match(/(?<=\.)\w+/)[0]) || field.name;

  const fieldError = (form.errors[fieldName] && form.touched[fieldName]) ||
      (form.status && form.status[`${fieldName}Error`]);

  const fieldErrorStyle = props.errorstyle === 'narrow' ? s.errorNarrowInput : s.error;

  return (
      <div className={fieldError && fieldErrorStyle}>
        <div>
          {fieldError && <span>{form.errors[fieldName] || form.status[`${fieldName}Error`]}</span>}
          <input className={s.formControlsInput} {...field} {...props} />
          {/*{console.log(JSON.stringify(props.errorstyle, null, 2))}*/}
        </div>
      </div>
  );
};


export const Textarea = ({children, field, form, ...props}) => {

  const fieldName = (/(?<=\.)\w+/.test(field.name) && field.name.match(/(?<=\.)\w+/)[0]) || field.name;

  const fieldError = form.errors[field.name] && form.touched[field.name] ||
      (form.status && form.status[`${fieldName}Error`]);

  const fieldErrorStyle = props.errorstyle === 'narrow' ? s.errorNarrowTextarea : s.error;

  return (
      <div className={fieldError && fieldErrorStyle}>
        <div>
          {fieldError && <span>{form.errors[fieldName] || form.status[`${fieldName}Error`]}</span>}
          <textarea className={s.formControlsTextarea} {...field} {...props} />
        </div>
      </div>
  );
};

export const Button = (props) => {
  return (
      <button
          className={s.formControlsButton} {...props} >{props.children}</button>
  );
};