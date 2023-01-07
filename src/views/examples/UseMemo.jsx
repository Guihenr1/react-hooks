import React, { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const sum = (n1, n2) => {
    var future = Date.now() + 2000;
    while (future > Date.now()) {} // delay

    return n1 + n2;
  };

  const total = useMemo(() => sum(n1, n2), [n1, n2]);

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <SectionTitle title="UseMemo" />
      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(e) => setN1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={(e) => setN2(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={(e) => setN3(parseInt(e.target.value))}
        />
        <span className="text">{total}</span>
      </div>
    </div>
  );
};

export default UseMemo;
