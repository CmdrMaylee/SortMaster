import { useState } from "react";
import Bars from "./components/Bars";

export default function SortPage() {
    const [arrSize, setArrSize] = useState(10);
    let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const updateArr = () => {
        console.log(arr);

        let newArr: number[] = [];

        for (let i = 0; i < arr.length; i++) newArr.push(i + 1);
        arr = newArr;
        setArrSize(newArr.length);
    };

    return (
        <>
            <Bars arr={arr} visualHeight={50} />
            <input
                type="range"
                min={2}
                max={10}
                onChange={() => updateArr()}
                value={arrSize}
                title={"arrSizeInput"}
            />
            <p>{arr.length}</p>
        </>
    );
}
