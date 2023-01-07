import React from "react";

const UseCallbackButton = (props) => {
  console.log("render");

  return (
    <>
      <input
        type="button"
        value="+1"
        className="btn"
        onClick={() => props.inc(1)}
      />
      <input
        type="button"
        value="+5"
        className="btn"
        onClick={() => props.inc(5)}
      />
      <input
        type="button"
        value="+10"
        className="btn"
        onClick={() => props.inc(10)}
      />
    </>
  );
};

export default React.memo(UseCallbackButton);
