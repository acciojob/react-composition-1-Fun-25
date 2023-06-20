
import { useState } from 'react';
import React from "react";
import './../styles/App.css';

const tabs = [
  {
    title: "Tab 1",
    content: "This is the content",
  },
  {
    title: "Tab 2",
    content: "This is the content",
  },
  {
    title: "Tab 3",
    content: "This is the content",
  }
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
      {tabstate && <p>{tabstate.content} {tabs.title}</p>}
    </div>
  );
};

 export default App;

