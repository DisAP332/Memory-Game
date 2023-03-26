import React, {useState, useEffect} from 'react'

export default function Game(props) {
    const [selected, setSelected] = useState([])
    const [score, setScore] = useState(0)

    let data = props.data

    const saveSelection = (ID) => () => { 
        setScore(score + 1)
        setSelected(prevSelected => [ID, ...prevSelected])
        selectionChecker(ID)
        reset()
        console.log(score)
    }

    function reset() {
        data = props.randomize(data)
    }

    function selectionChecker(ID) {
        for (let i = 0; i <= selected.length; i++){
            if (ID === selected[i]){
                setScore(0)
                setSelected([])
            }
        }
    }

    useEffect(() => {
    }, [selected])

    return (
        <div>
            <div className='scoreBoard'>
                <h1>Score: {score}</h1>
            </div>
            <div className='cardWrapper'>
                <div>
                    <img src={data[0].imgPath} alt=''
                    onClick={saveSelection(data[0].ID)}
                    />
                </div>
                <div>
                    <img src={data[1].imgPath} alt=''
                    onClick={saveSelection(data[1].ID)}
                    />
                </div>
                <div>
                    <img src={data[2].imgPath} alt=''
                    onClick={saveSelection(data[2].ID)}
                    />
                </div>
                <div>
                    <img src={data[3].imgPath} alt=''
                    onClick={saveSelection(data[3].ID)}
                    />
                </div>
                <div>
                    <img src={data[4].imgPath} alt=''
                    onClick={saveSelection(data[4].ID)}
                    />
                </div>
                <div>
                    <img src={data[5].imgPath} alt=''
                    onClick={saveSelection(data[5].ID)}
                    />
                </div>
                <div>
                    <img src={data[6].imgPath} alt=''
                    onClick={saveSelection(data[6].ID)}
                    />
                </div>
                <div>
                    <img src={data[7].imgPath} alt=''
                    onClick={saveSelection(data[7].ID)}
                    />
                </div>
            </div>
        </div>
    )
}