import { useEffect, useState, useRef } from "react";

/* eslint-disable react/prop-types */
export function CountUp({ title, start = 0, end }) {

    const [value, setValue] = useState(null)
    const ref = useRef(start)

    const counter = end/100

    const Count = () => {
        if(ref.current < end) {
            const result = Math.ceil(ref.current + counter)
            if(result > end) return setValue(end);
            setValue(result);
            ref.current = result;
        }
        setTimeout(Count, 20)
    }

    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            Count()
        }
        return () => {isMounted = false}
    }, [end])
    
    return (
        <div className="flex h-full flex-col items-center justify-center space-y-2 tracking-wide text-[#eeeeee] transition-all">
            <p className="font-quicksand text-4xl font-bold">{value}+</p>
            <p className="font-medium uppercase">{title}</p>
        </div>
    );
}
