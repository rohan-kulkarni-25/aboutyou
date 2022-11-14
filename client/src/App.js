import './App.css';
import React, { useState } from 'react'
import AllUsers from './Components/AllUsers';
import Header from './Components/Header';
import AddButton from './Components/AddButton';
import AddYourData from './Components/AddYourData';
import Loading from './images/loading.png'

function App() {
  const [load, setload] = useState(true) // true
  const [Page, setPage] = useState(0) // 0

  return (
    <div className="app">
      <img src={Loading} className={load ? "load" : "hide"} alt="loader" />
      {Page ? (
        <AddYourData
          load={load}
          setPage={setPage}
          setload={setload}
        ></AddYourData>
      ) : (
        <>
          <div>
            <Header></Header>
            <AddButton Page={Page} setPage={setPage}></AddButton>
          </div>
          <AllUsers upload={load} setload={setload}></AllUsers>
        </>
      )}
    </div>
  );
}

export default App;
