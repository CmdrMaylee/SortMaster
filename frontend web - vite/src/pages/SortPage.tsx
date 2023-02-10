import React, { useEffect, useState } from "react";
import Bars from "../components/Bars";

export default function SortPage() {
    const [arrSize, setArrSize] = useState(2);
    const [arr, setArr] = useState([1, 2]);
    const [algorithms, setAlgorithms] = useState([]);

    const getAlgorithms = () => {
        fetch("http://localhost:5160/api/Sort/GetAllSortingAlgorithms")
            .then((response) => response.json())
            .then((json) => {
                setAlgorithms(json);
            });
    };

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

    useEffect(() => {
        getAlgorithms();
    }, []);

    return (
        <>
            <Bars arr={arr} visualHeight={5} />
            <div className="flex ">
                <input
                    type="number"
                    min={2}
                    max={10000}
                    onChange={handleSliderChange}
                    value={arrSize}
                    className="text-4xl bg-gray-400"
                />
                <select name="Algorithms" className="w-full bg-gray-200 text-5xl rounded-2xl">
                    {algorithms.map((x, y) => (
                        <option key={y}>{x}</option>
                    ))}
                </select>
            </div>
        </>
    );
}
