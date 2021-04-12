import React from 'react';
import s from './FormsControls.module.scss';

export const Input = ({children, field, form, ...props}) => {

  const fieldError = form.errors[field.name] && form.touched[field.name];

  return (
      <div className={fieldError && s.error}>
        <div>
          {fieldError && <span>{form.errors[field.name]}</span>}
          <input className={s.formControlsInput} {...field} {...props} />
          {/* {console.log(JSON.stringify(form, null, 2))}*/}
        </div>
      </div>
  );
};

export const Textarea = ({children, field, form, ...props}) => {

  const fieldError = form.errors[field.name] && form.touched[field.name];

  return (
      <div className={fieldError && s.error}>
        <div>
          {fieldError && <span>{form.errors[field.name]}</span>}
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