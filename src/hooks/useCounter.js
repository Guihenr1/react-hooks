import { useState } from "react";

const useCounter = (initialValue = 1000) => {
    const [count, setCount] = useState(initialValue);

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    return [count, inc, dec];
};

export default useCounter;
