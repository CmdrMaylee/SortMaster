import { useState } from "react";
import { AlgorithmResponse } from "../ApiRequests";
import Header from "../components/Header";
import Scoreboard from "../components/Scoreboard";
import SortInfo from "../components/SortInfo";
import SortMenu from "../components/SortMenu";
import SortReport, { SortReportApiModel } from "../components/SortReport";

export default function SortPage() {
    /* STATES */

    const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmResponse>();
    const [currentSortReport, setCurrentSortReport] = useState<SortReportApiModel>();

    return (
        <>
            <Header />

            <div className="flex flex-col gap-6 px-0 md:px-10 mt-5">
                {/* Sort Menu */}
                <SortMenu
                    setCurrentSortReport={setCurrentSortReport}
                    selectedAlgorithm={selectedAlgorithm}
                    setSelectedAlgorithm={setSelectedAlgorithm}
                ></SortMenu>

                {/* Sort Report | CONDITIONAL */}
                <div className="flex gap-6 w-full">
                    {currentSortReport && (
                        <SortReport
                            report={currentSortReport}
                            algorithmName={selectedAlgorithm?.algorithmName}
                        ></SortReport>
                    )}
                    {selectedAlgorithm && (
                        <Scoreboard algorithm={selectedAlgorithm} arrSize={}></Scoreboard>
                    )}
                </div>

                {/* Sort Info */}
                <div>
                    {selectedAlgorithm && <SortInfo algorithm={selectedAlgorithm}></SortInfo>}
                </div>
            </div>

            <div className="h-16"></div>

            {}
        </>
    );
}
