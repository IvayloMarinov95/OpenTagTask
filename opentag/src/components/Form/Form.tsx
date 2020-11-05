import React from 'react';

import styles from './Form.module.scss';

interface Props {
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
}) => {
  return (
    <div className={formStyles}>
      <input
        type="text"
        placeholder="Add new Card"
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
