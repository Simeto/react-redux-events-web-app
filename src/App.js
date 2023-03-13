import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectToEventbrite } from "./api/backendThunkRequests";
import { Header, Content } from "./app/layout";
import styles from "./scss/_layout.module.scss";
import { Modal } from "./app/views";
import { WriteComment } from "./app/parts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connectToEventbrite(dispatch));
  }, [dispatch]);
  
  return (
    <div className={styles.container}>
      <Modal>
        <WriteComment />
      </Modal>
      <Header />
      <Content /> {/** ToDo check if login else show landing/login page */}
    </div>
  );
}

export default App;
