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
                <div className="p-6 rounded-xl bg-blue-300 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center dark:bg-slate-600">
                    {algorithm?.algorithmName === "BogoSort" && (
                        <WarningMessage
                            title="Warning"
                            message="Beyond an array size of 10, BogoSort can take several minutes(possibly hours after a size of 12-13) to sort. Caution is advised if you start a sorting operation."
                        ></WarningMessage>
                    )}
                    <div>
                        <h2 className="text-3xl font-bold">{algorithm.algorithmName}</h2>
                        <p className="mx-auto">{algorithm.descriptionText}</p>
                    </div>

                    <div>
                        <h4 className="text-xl">Big O Notation</h4>
                        <p>Best case: {algorithm.bigONotationBest}</p>
                        <p>Worst case: {algorithm.bigONotationWorst}</p>
                        <p>Average case: {algorithm.bigONotationAverage}</p>
                    </div>
                    <div>
                        <h4 className="text-xl">Performance</h4>
                        <p>{algorithm.performanceText}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
