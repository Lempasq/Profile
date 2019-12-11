import React, { useState, useEffect } from 'react'
import './headerStyles.scss'
import axios from 'axios';

function Header() {
    const [clicks, setClicks] = useState('...')

    // GET COUNTER
    useEffect(() => {
        axios.get('http://localhost:5000/api/get')
            .then(res => setClicks(res.data[1].clicks))
            .catch(e => console.log(e))
    },[])

    // SET NEW COUNTER
    const id = '5dc3ebcf8b0f7603fc3cfb06'
    const changeCount = () => {
        axios.patch(`http://localhost:5000/api/update/${id}`, {"newClicks": clicks + 1})
            .catch(e => console.log(e))

        setClicks(clicks + 1)
    }

    // LI OF ARRAY
    const listInclude = [{
        href: '#firstMainSection',
        text: 'О себе'
    }, {
        href: "#secondMainSection",
        text: 'Стек'
    }, {
        href: "#thirdMainSection",
        text: 'Опыт'
    }, {
        href: "#fourthMainSection",
        text: 'Контакты'
    }];

    // HEADER BUTTONS
    const makeNewList = (listOfArray) => listOfArray.map(({href, text}, index) => (
        <li onClick={changeCount} className="headerLi" key={`My key: ${index}`}>
            <a href={href}>{text}</a>
        </li>
    ))

    return (
        <header >
            <ul className={'headerList'}>
                {makeNewList(listInclude)}
                <div>
                    <span className={'clickedInfo'}>Buttons clicked:</span>
                    <span className={'clickedCounter'} style={{
                            color: clicks >= 1000 ? 'palevioletred' :
                            clicks >= 500 ? 'orangered' :
                            clicks >= 200 ? 'darkorange' :
                            clicks >= 100 ? 'orange' :
                            clicks >= 50 ? 'gold' :
                            clicks >= 10 ? 'yellow' : 'aliceblue'
                    }}>
                        {clicks}
                    </span>
                </div>
            </ul>
        </header>
    )
}

export default Header