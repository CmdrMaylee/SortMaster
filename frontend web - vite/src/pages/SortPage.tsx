import React, { useEffect, useState } from "react";
import Bars from "../components/Bars";

export default function SortPage() {
    const [arrSize, setArrSize] = useState(2);
    const [arr, setArr] = useState([1, 2]);
    const [algorithms, setAlgorithms] = useState<string[]>([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>();
    const [isSortButtonValid, setIsSortButtonValid] = useState(true);

    let randomizeArray = true;

    const GetAlgorithms = () => {
        fetch("http://localhost:5160/api/Sort/GetAllSortingAlgorithms")
            .then((response) => response.json())
            .then((json: string) => {
                setAlgorithms([...json]);
            });
    };

    const PerformSort = () => {
        console.log("Start it");
        const rawResponse = fetch(
            `http://localhost:5160/api/Sort/PerformSort?algorithm=${selectedAlgorithm}&arrSize=${arrSize}`,
            {
                method: "POST",
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = Number(e.target.value);
        if (num < 1) num = 1;

        randomizeArray = true;

        setArrSize(num);
        updateArray();
    };

    const handleAlgorithmChange = (e: { target: { options: { selectedIndex: any } } }) => {
        const selectedOption = e.target.options.selectedIndex;
        setSelectedAlgorithm(algorithms[selectedOption]);
    };

    const validateSortButton = () => {
        console.log(selectedAlgorithm);
        console.log(arrSize);
        if (
            !algorithms.includes(`${selectedAlgorithm}`) ||
            arrSize < 2 ||
            selectedAlgorithm == undefined
        )
            setIsSortButtonValid(false);
        else setIsSortButtonValid(true);
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
        validateSortButton();
    }, [selectedAlgorithm, arrSize]);

    useEffect(() => {
        GetAlgorithms();
    }, []);

    return (
        <>
            <div className="p-6 mt-6 rounded-xl bg-blue-300 text-2xl md:text-5xl dark:bg-slate-600">
                {/* Bars */}
                <Bars arr={arr} visualHeight={5} randomize={true} />

                {/* Bars input & selection */}
                <div className="flex items-center flex-col mt-6 md:flex-row">
                    <div className="flex items-center">
                        <input
                            type="number"
                            min={1}
                            max={100000}
                            onChange={handleInputChange}
                            value={arrSize}
                            className="bg-white text-center rounded-xl dark:bg-slate-800"
                        />
                    </div>
                    <select
                        name="Algorithms"
                        onChange={handleAlgorithmChange}
                        className="w-full rounded-2xl md:ml-10 mt-6 bg-white md:mt-0 dark:bg-slate-800"
                    >
                        <option>Choose Algorithm</option>
                        {algorithms.map((x, i) => (
                            <option key={i}>{x}</option>
                        ))}
                    </select>
                </div>

                {/* Sort buttons */}
                <div className="w-full flex items-center justify-center">
                    {isSortButtonValid && (
                        <div>
                            <button
                                type="button"
                                className="bg-slate-700 border-b-4 border-slate-500 px-6 py-1 m-4 rounded text-3xl drop-shadow-md opacity-30"
                                disabled={isSortButtonValid}
                            >
                                <p>Sort!</p>
                            </button>
                        </div>
                    )}
                    {!isSortButtonValid && (
                        <button
                            type="button"
                            onClick={PerformSort}
                            className="bg-slate-700 border-b-4 border-green-500 px-6 py-1 m-4 rounded text-3xl text-green-300 drop-shadow-md hover:border-x-4"
                            disabled={isSortButtonValid}
                        >
                            <p>Sort!</p>
                        </button>
                    )}

                    {/* <button
                        type="button"
                        className="bg-slate-700 border-b-4 border-yellow-500 px-6 py-1 m-4 rounded text-3xl text-yellow-200 drop-shadow-md hover:border-x-4"
                    >
                        <p>Check</p>
                    </button> */}
                </div>
            </div>

            {/* Sort info */}
            <div className="p-6 mt-6 rounded-xl bg-blue-300 dark:bg-slate-600">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">BubbleSort</h2>
                    <p className="mx-auto md:w-1/2">
                        One of the most well known algorithms, with a classic beginner-friendly
                        approach to sorting techniques. Compare the first two numbers, flip them if
                        they are out of order, compare the second number with the next one, switch
                        their places if they are out of order, repeat.
                    </p>

                    <div className="mt-6 flex mx-auto items-center justify-around flex-col md:flex-row">
                        <div>
                            <h4 className="text-xl">Big O Notation</h4>
                            <p>Best case: O(n)</p>
                            <p>Worst case: O(n²)</p>
                            <p>Average case: O(n²)</p>
                        </div>
                        <div className="w-1/2 mt-6">
                            <h4 className="text-xl">Performance</h4>
                            <p>
                                The time it takes to sort a sequence increases exponentially,
                                because (almost) every number has to be checked for every sequence
                                done. Double the initial quantity and you quadruple the initial
                                sorting time, e.g. if 10,000 items takes 0.5 seconds to sort, a list
                                of 20,000 items will usually take 2 seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
