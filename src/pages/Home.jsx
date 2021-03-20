import React from 'react';
import { actionUserLogin } from '../state/action';
import useAppData from '../state/dataLayer';

function Home() {
  const [_, dispatch] = useAppData();
  return (
    <div>
      <button onClick={() => actionUserLogin(false, dispatch)}>Logout</button>
    </div>
  );
}

export default Home;
