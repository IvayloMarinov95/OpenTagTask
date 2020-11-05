import React from 'react';

import styles from './Form.module.scss';

interface Props {
  placeholder: string;
  input: string;
  formStyles: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clickHandler: () => void;
}

const Form: React.FC<Props> = ({
  clickHandler,
  changeHandler,
  input,
  formStyles,
  placeholder,
}) => {
  return (
    <div className={formStyles}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={changeHandler}
        value={input}
      />
      <button className={styles.btn} onClick={clickHandler}>
        + Add
      </button>
    </div>
  );
};

export default Form;
