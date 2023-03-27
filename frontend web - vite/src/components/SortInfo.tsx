import { AlgorithmResponse } from "../ApiRequests";

interface Props {
    algorithm: AlgorithmResponse;
}

export default function SortInfo({ algorithm }: Props) {
    if (!algorithm) {
        return <></>;
    }
    return (
        <>
            {/* Sort info */}
            <div className="p-6 m-8 rounded-xl bg-blue-300 dark:bg-slate-600">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">{algorithm.algorithmName}</h2>
                    <p className="mx-auto md:w-1/2">{algorithm.descriptionText}</p>

                    <div className="mt-6 flex mx-auto items-center justify-around flex-col md:flex-row">
                        <div>
                            <h4 className="text-xl">Big O Notation</h4>
                            <p>Best case: {algorithm.bigONotationBest}</p>
                            <p>Worst case: {algorithm.bigONotationWorst}</p>
                            <p>Average case: {algorithm.bigONotationAverage}</p>
                        </div>
                        <div className="md:w-1/2 mt-6">
                            <h4 className="text-xl">Performance</h4>
                            <p>{algorithm.performanceText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
