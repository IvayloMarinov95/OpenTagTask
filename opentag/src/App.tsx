import React, { useState } from 'react';

import styles from './App.module.scss';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

const App = () => {
  const [titles, setTitles] = useState<Array<string>>([]);
  const [input, setInput] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const clickHandler = () => {
    setTitles([...titles, input]);
    setInput("");
  };

  return (
    <>
      <Form
        clickHandler={clickHandler}
        changeHandler={changeHandler}
        formStyles={styles.form}
        input={input}
        placeholder="Add new card"
      />
      <div className={styles.cards}>
        {titles.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    </>
  );
};

export default App;
