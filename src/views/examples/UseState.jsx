import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercise 1" />
            <div className="center">
                <div className="text">{count}</div>
                <div>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(c => c + 50)}>+50</button>
                </div>
            </div>

            <SectionTitle title="Exercise 2" />
            <input type="text" className="input" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default UseState
