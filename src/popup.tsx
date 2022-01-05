import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = () => {
  const [firstNftPrice, setFirstNftPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    chrome.action.setBadgeText({ text: firstNftPrice.toString() });
  }, [firstNftPrice]);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div style={{ width: "300px", maxHeight: "540px", overflow: "auto", padding: "10px 5px" }}>
      {loading && <div>Loading</div>}
      {!loading && <div>
      <button
        style={{ marginRight: "5px" }}
      >
        Refresh
      </button></div>}

    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
