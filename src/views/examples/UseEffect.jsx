import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [age, setAge] = useState(25);
    const [text, setText] = useState("");
    const [even, setEven] = useState(false);

    useEffect(() => {
        setText(age > 0 ? `Guilherme is ${age} years old` : 'Invalid age')
        setEven(age % 2 === 0)
    }, [age])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Age" />
            <div>
                <div className="text">{text}</div>
                <input type="number" className="input" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <SectionTitle title="Even or Odd" />
            <div>
                <div className="text">This age is {even ? 'Even': 'Odd'}</div>
            </div>
        </div>
    )
}

export default UseEffect
