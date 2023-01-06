import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const Merge = (v1, v2) => {
  return [...v1].map((e, i) => `${e}${v2[i] || ""}`).join();
};

const UseRef = (props) => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [textCorret, setTextCorret] = useState("");

  const count = useRef(0);
  const refText = useRef(null);
  const refText2 = useRef(null);

  useEffect(() => {
    refText2.current.focus();
  }, [text]);

  useEffect(() => {
    refText.current.focus();
  }, [text2]);

  useEffect(() => {
    setTextCorret(Merge(text, text2));
  }, [text, text2]);

  count.current++;

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Count" />
      <div>How many times has it been rendered: {count.current}</div>
      <div>Text: {textCorret}</div>
      <input
        type="text"
        className="input"
        ref={refText}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        className="input"
        ref={refText2}
        value={text2}
        onChange={(e) => setText2(e.target.value)}
      />
    </div>
  );
};

export default UseRef;
