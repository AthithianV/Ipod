import Wheel from "./Wheel UI/wheel";
import styles from "./App.module.css";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className={styles.ipod}>
        <Wheel />
      </div>
    </ErrorBoundary>
  );
}

export default App;
