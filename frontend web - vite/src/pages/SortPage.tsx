import { useState } from "react";
import { AlgorithmResponse } from "../ApiRequests";
import Scoreboard from "../components/Scoreboard";
import SortInfo from "../components/SortInfo";
import SortMenu from "../components/SortMenu";
import SortReport, { SortReportApiModel } from "../components/SortReport";
import WarningMessage from "../components/WarningMessage";

export default function SortPage() {
    /* STATES */

    const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmResponse>();
    const [currentSortReport, setCurrentSortReport] = useState<SortReportApiModel>();

    return (
        <>
            {/* Sort Menu */}
            <SortMenu
                setCurrentSortReport={setCurrentSortReport}
                selectedAlgorithm={selectedAlgorithm}
                setSelectedAlgorithm={setSelectedAlgorithm}
            ></SortMenu>

            {/* Sort Report | CONDITIONAL */}
            {currentSortReport && (
                <SortReport
                    report={currentSortReport}
                    algorithmName={selectedAlgorithm?.algorithmName}
                ></SortReport>
            )}

            <Scoreboard algorithmId={currentSortReport?.AlgorithmId ?? 0}></Scoreboard>

            {/* Sort Info */}
            <div className="flex flex-col xl:flex-row">
                {selectedAlgorithm?.algorithmName === "BogoSort" && (
                    <WarningMessage
                        title="Warning"
                        message="BogoSort can take several minutes to sort a list of more than 10 items. Caution is advised."
                    ></WarningMessage>
                )}
                {selectedAlgorithm && <SortInfo algorithm={selectedAlgorithm}></SortInfo>}
            </div>

            {}
        </>
    );
}
