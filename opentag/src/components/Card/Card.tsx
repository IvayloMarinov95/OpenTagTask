import React, { useState } from 'react';

import Form from '../Form/Form';
import styles from './Card.module.scss';

interface Props {
  title: string;
}

const Card: React.FC<Props> = ({ title }) => {
  const [cardInput, setCardInput] = useState<string>("");
  const [rows, setRows] = useState<Array<string>>([]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardInput(value);
  };

  const clickHandler = () => {
    setRows([...rows, cardInput]);
    setCardInput("");
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div>
        {rows.map((rowInfo, index) => (
          <p key={index} className={styles.row}>
            {index + 1}. {rowInfo}
          </p>
        ))}
        <Form
          clickHandler={clickHandler}
          changeHandler={changeHandler}
          formStyles={styles.form}
          input={cardInput}
        />
      </div>
    </div>
  );
};

export default Card;
