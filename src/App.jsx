import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CSSPopUp from './CSSPopUp';
import PortalPopup from './PortalPopUp';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hello World</div>
      {/* <CSSPopUp /> */}
      <PortalPopup />
    </>
  );
}

export default App;
