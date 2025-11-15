import ClickSpark from './ClickSpark';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ClickSpark>
        <button style={{ margin: 100, padding: 20, fontSize: 20 }}>
          Click Me ✨
        </button>
      </ClickSpark>
    </div>
  );
}

export default App;
