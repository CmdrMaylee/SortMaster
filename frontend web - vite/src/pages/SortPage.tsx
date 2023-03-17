import React, { useEffect, useState } from "react";
import { AlgorithmResponse, ApiFetchAlgorithms, ApiPerformSort } from "../ApiRequests";
import Bars from "../components/Bars";
import SortInfo from "../components/SortInfo";
import SortReport, { SortReportApiModel } from "../components/SortReport";

export default function SortPage() {
    /* STATES */

    const [arr, setArr] = useState([1, 2]);
    const [arrSize, setArrSize] = useState(arr.length);
    const [algorithms, setAlgorithms] = useState<AlgorithmResponse[]>([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmResponse>();
    const [isSortButtonValid, setIsSortButtonValid] = useState(true);
    const [currentSortReport, setCurrentSortReport] = useState<SortReportApiModel>();

    let randomizeArray = true;

    /* API METHODS */

    async function GetAlgorithms() {
        let result = await ApiFetchAlgorithms();
        setAlgorithms(result);
    }

    async function PerformSort() {
        let result = await ApiPerformSort(selectedAlgorithm!.algorithmName, arrSize);
        setCurrentSortReport(result);
    }

    /* HANDLE ELEMENT-CHANGE METHODS */

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let num = Number(e.target.value);
        if (num < 0) num = 0;

        randomizeArray = true;

        setArrSize(num);
        updateArray();
    };

    const handleAlgorithmChange = (e: { target: { options: { selectedIndex: any } } }) => {
        const selectedOption = e.target.options.selectedIndex;
        setSelectedAlgorithm(algorithms[selectedOption - 1]);
    };

    const validateSortButton = () => {
        if (
            // !algorithms. includes(`${selectedAlgorithm?.AlgorithmName}`) ||
            arrSize < 2 ||
            selectedAlgorithm == undefined
        ) {
            setIsSortButtonValid(false);
        } else {
            setIsSortButtonValid(true);
        }
    };

    const updateArray = () => {
        let temp: number[] = [];
        for (let i = 0; i < arrSize; i++) temp[i] = i + 1;
        setArr(temp);
    };

    /* USEEFFECTS */

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
            <div className="p-6 mt-6 rounded-xl bg-blue-300 text-2xl lg:text-5xl dark:bg-slate-600">
                {/* Bars */}
                <Bars arr={arr} visualHeight={5} randomize={true} />

                {/* Bars input & selection */}
                <div className="flex items-center flex-col mt-6 md:flex-row">
                    <div className="flex items-center">
                        <input
                            type="number"
                            min={0}
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
                            <option key={i}>{x.algorithmName}</option>
                        ))}
                    </select>
                </div>

                {/* Sort buttons */}
                <div className="w-full flex items-center justify-center">
                    {isSortButtonValid == false && (
                        <div>
                            <button
                                type="button"
                                className="bg-slate-700 border-b-4 border-slate-500 px-6 py-1 m-4 rounded text-3xl drop-shadow-md opacity-30"
                                disabled={true}
                            >
                                <p>Sort!</p>
                            </button>
                        </div>
                    )}
                    {isSortButtonValid == true && (
                        <button
                            type="button"
                            onClick={PerformSort}
                            className="bg-slate-200 dark:bg-slate-700 border-b-4 border-green-700 px-6 py-1 m-4 rounded text-3xl text-green-700 dark:text-green-300 drop-shadow-md hover:border-x-4"
                            disabled={false}
                        >
                            <p>Sort!</p>
                        </button>
                    )}
                </div>
            </div>

            {/* Sort Report | CONDITIONAL */}
            {currentSortReport && (
                <SortReport
                    report={currentSortReport}
                    algorithmName={selectedAlgorithm?.algorithmName}
                ></SortReport>
            )}

            {/* Sort info */}
            {selectedAlgorithm && <SortInfo algorithm={selectedAlgorithm}></SortInfo>}
        </>
    );
}
