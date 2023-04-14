import { useEffect, useState } from "react";
import {
    AlgorithmResponse,
    ApiGetSortReportsByAlgorithmId,
    SortHistoryResponse,
} from "../ApiRequests";

interface Props {
    algorithm: AlgorithmResponse | undefined;
}

export default function Scoreboard({ algorithm }: Props) {
    const [sortHistory, setSortHistory] = useState<SortHistoryResponse[] | undefined>([]);

    useEffect(() => {
        const getSortHistories = async () => {
            let histories = await ApiGetSortReportsByAlgorithmId(algorithm?.algorithmId);
            console.log(histories);

            setSortHistory(histories);
        };

        getSortHistories();
    }, [algorithm]);

    return (
        <div className="flex flex-col grow rounded-xl text-center bg-cyan-400 dark:bg-cyan-700">
            <h2 className="text-4xl font-bold tracking-widest">Scoreboard</h2>
            <div className="flex-grow text-left justify-center items-center flex-col p-6 rounded-xl bg-blue-300 dark:bg-slate-600">
                <h2 className="text-xl2">{}</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-slate-700">
                            <th className="p-1">Sorting time</th>
                            <th>Date sorted</th>
                            <th>Array size</th>
                            <th>Times compared</th>
                            <th>Array accesses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortHistory?.map((item, index) => (
                            <tr key={index} className="hover:bg-slate-800">
                                <td>{item.getTimeSpan}</td>
                                <td>{item.getFormatedSortEnd}</td>
                                <td>{item.arraySize}</td>
                                <td>{item.timesCompared}</td>
                                <td>{item.arrayAccesses}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
