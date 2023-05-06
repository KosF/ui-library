import reactLogo from '@common/assets/react.svg';
import viteLogo from '@common/assets/vite.svg';

import '@common/styles/main.scss';

function App() {
  return (
    <div data-testid="app">
      <div>
        <a
          href="https://vitejs.dev"
          target="test"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>
        Discovery-Engineering: <br />
        Vite + React
      </h1>
    </div>
  );
}

export default App;
