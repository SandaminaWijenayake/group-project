import React from "react";
import styles from "./Message.module.css";
import SectionCard from "../UI/SectionCard";

const Message = ({
  messageEmail,
  messagePassword,
  messageUserCreated,
  cloesThePropt,
}) => {
  return (
    <>
      <div
        className={styles.backDrop}
        onClick={() => {
          cloesThePropt();
        }}
      />
      <SectionCard className={styles.module}>
        <header className={styles.header}>
          <h2>Alert</h2>
        </header>
        <div className={styles.message}>
          <p>{messageEmail}</p>
        </div>
        <div className={styles.message}>
          <p>{messagePassword}</p>
        </div>
        <div className={styles.message}>
          <p>{messageUserCreated}</p>
        </div>
        <footer className={styles.button}>
          <button
            onClick={() => {
              cloesThePropt();
            }}
          >
            Okay
          </button>
        </footer>
      </SectionCard>
    </>
  );
};

export default Message;
