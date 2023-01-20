import { useState } from "react";
import Bars from "./components/Bars";

export default function SortPage() {
    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <>
            <Bars arr={arr} visualHeight={50} />
            <input type="range" min={2} max={100} />
            <p>{arr.length}</p>
        </>
    );
}
