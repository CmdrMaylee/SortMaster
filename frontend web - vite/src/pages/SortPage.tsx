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
            <div className="bg-slate-600 p-6 mt-6 rounded-xl">
                <Bars arr={arr} visualHeight={5} />
                <div className="flex mt-6<">
                    <p></p>
                    <input
                        type="number"
                        min={2}
                        max={100000}
                        onChange={handleSliderChange}
                        value={arrSize}
                        className="text-4xl bg-gray-400 text-center rounded-xl"
                    />
                    <select name="Algorithms" className="w-full bg-slate-800 text-5xl rounded-2xl ">
                        {algorithms.map((x, i) => (
                            <option key={i}>{x}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full flex items-center justify-center">
                    <button
                        type="button"
                        className="bg-slate-700 border-b-4 border-green-500 px-6 py-1 m-4 rounded text-3xl text-green-300 drop-shadow-md hover:border-x-4"
                    >
                        <p>Sort!</p>
                    </button>

                    <button
                        type="button"
                        className="bg-slate-700 border-b-4 border-yellow-500 px-6 py-1 m-4 rounded text-3xl text-yellow-200 drop-shadow-md hover:border-x-4"
                    >
                        <p>Check</p>
                    </button>
                </div>
            </div>
        </>
    );
}
