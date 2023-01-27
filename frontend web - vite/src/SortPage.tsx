import React, { useEffect, useState } from "react";
import Bars from "./components/Bars";

export default function SortPage() {
    const [arrSize, setArrSize] = useState(2);
    const [arr, setArr] = useState([1, 2]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArrSize(Number(e.target.value));
        updateArray();
    };

    const updateArray = () => {
        let temp: number[] = [];
        for (let i = 0; i < arrSize; i++) temp[i] = i + 1;
        setArr(temp);
    };

    useEffect(() => {
        updateArray();
    }, [arrSize]);

    return (
        <>
            <Bars arr={arr} visualHeight={50} />
            <input
                id="slals"
                type="range"
                min={2}
                max={10}
                onChange={handleSliderChange}
                value={arrSize}
                title={"arrSizeInput"}
            />
            <p>{arrSize}</p>
        </>
    );
}
