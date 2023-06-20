
import { useState } from 'react';
import React from "react";
import './../styles/App.css';

const tabs = [
  { title: "Tab 1", content: "This is the content for Tab 1." },
  { title: "Tab 2", content: "This is the content for Tab 2." },
  { title: "Tab 3", content: "This is the content for Tab 3." },
];

const App = () => {
  return (
    <div>
       <Tab tabs={tabs}/>
    </div>
  )
}

const Tab = ({ tabs }) => {
  const [tabstate, setTabstate] = useState(null);
  function showContent(tab) {
    setTabstate(tab);
  }
  return (
    <div>
      {tabs.map((tab) => (
        <a>
          <li key={tab.title} onClick={() => showContent(tab)}>
            {tab.title}
          </li>
        </a>
      ))}
      {tabstate && <div>{tabstate.content}</div>}
    </div>
  );
};

 export default App;

