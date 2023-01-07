import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButton from "./UseCallbackButton";

const UseCallback = (props) => {
  const [total, setTotal] = useState(0);

  const sum = useCallback(
    (value) => {
      setTotal((current) => current + value);
    },
    [setTotal]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <SectionTitle title="Counter" />
      <div className="center">
        <div className="text">{total}</div>
        <UseCallbackButton inc={sum} />
      </div>
    </div>
  );
};

export default UseCallback;
