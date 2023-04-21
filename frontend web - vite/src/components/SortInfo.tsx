import { AlgorithmResponse } from "../ApiRequests";
import WarningMessage from "./WarningMessage";

interface Props {
    algorithm: AlgorithmResponse | undefined;
}

export default function SortInfo({ algorithm }: Props) {
    if (!algorithm) {
        return <></>;
    }
    return (
        <>
            {/* Sort info */}
            <div className="rounded-xl text-center bg-emerald-400 dark:bg-emerald-800">
                <h2 className="text-4xl font-bold tracking-widest">Info</h2>
                <div className="p-6 rounded-xl flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 bg-blue-300 dark:bg-slate-600">
                    {algorithm?.algorithmName === "BogoSort" && (
                        <div className="w-full lg:w-2/5">
                            <WarningMessage
                                title="Warning"
                                message="Beyond an array size of 10, BogoSort can take several minutes(possibly hours after a size of 12-13) to sort. Caution is advised if you start a sorting operation."
                            ></WarningMessage>
                        </div>
                    )}
                    <div className="w-full lg:w-2/5">
                        <h2 className="text-3xl font-bold">{algorithm.algorithmName}</h2>
                        <p className="mx-auto">{algorithm.descriptionText}</p>
                    </div>

                    <div className="w-full lg:w-2/5">
                        <h4 className="text-xl">Big O Notation</h4>
                        <p>Best case: {algorithm.bigONotationBest}</p>
                        <p>Worst case: {algorithm.bigONotationWorst}</p>
                        <p>Average case: {algorithm.bigONotationAverage}</p>
                    </div>
                    <div className="w-full lg:w-2/5">
                        <h4 className="text-xl">Performance</h4>
                        <p>{algorithm.performanceText}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
