import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGetA_20_4 = (props: AppProps) => {

    const [exTime, setExTime] = useState(0);

    async function getData() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/A_20_4');
            const data = await res.status===200;
            let end = Date.now();
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='getAll'>
            <button className="btn btn-primary" onClick={getData}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
        </div>
)
    ;
};

interface AppProps {
}

export default MongoGetA_20_4;