import { useState } from 'react';
import './Klok.css';

export function Klok(){
    const [date, setDate] = useState(new Date());
    function updateTime(){
        setDate(new Date());
    }
    setInterval(updateTime, 1000);
    return(
        <article className='klok-contain'>
            <div className='klok'>
            {
                date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0')
            }
            </div>
        </article>
    )
}