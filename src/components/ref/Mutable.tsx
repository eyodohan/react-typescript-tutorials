


import React, { useEffect, useRef, useState } from 'react'

export const Mutable = () => {
    const [timer,setTimer ] = useState(0)
    const interValRef = useRef<number | null>(null)

    const stopTimer = () => {
        if(interValRef.current)
        window.clearInterval(interValRef.current)
    }

    useEffect(()=>{
        interValRef.current = window.setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000)
        return ()=>{
            console.log("stop")
            stopTimer()
        }
    },[])
    return (
        <div>
            HookTimer - {timer}
            <button onClick={()=>stopTimer()}>Stop Timer</button>
        </div>
    )
}
