import React, { useState } from "react";

function Tabs(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <ul>
        {props.tabs.map((tab, index) => (
          <li key={index} onClick={() => handleTabClick(index)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{props.tabs[activeTabIndex].content}</div>
    </div>
  );
}

export default Tabs;
