import { useState } from "react";
import { useSelector } from "react-redux";
import { AlgorithmResponse } from "../ApiRequests";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Scoreboard from "../components/Scoreboard";
import SortInfo from "../components/SortInfo";
import SortMenu from "../components/SortMenu";
import SortReport from "../components/SortReport";
import { RootState } from "../state/store";

export default function SortPage() {
    /* STATES */

    const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmResponse>();
    const currentSortReport = useSelector((state: RootState) => state.currentSortReport.value);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex flex-col grow gap-6 px-0 md:px-10 mt-5">
                {/* Sort Menu */}
                <SortMenu
                    selectedAlgorithm={selectedAlgorithm}
                    setSelectedAlgorithm={setSelectedAlgorithm}
                ></SortMenu>

                {/* Sort Report | CONDITIONAL */}
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    {currentSortReport && (
                        <SortReport algorithmName={selectedAlgorithm?.algorithmName}></SortReport>
                    )}
                    {selectedAlgorithm && <Scoreboard algorithm={selectedAlgorithm}></Scoreboard>}
                </div>

                {/* Sort Info */}
                <div>
                    {selectedAlgorithm && <SortInfo algorithm={selectedAlgorithm}></SortInfo>}
                </div>
                <div className="h-16"></div>
            </div>

            <Footer />
        </div>
    );
}
