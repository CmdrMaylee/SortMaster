import { useEffect, useState } from "react";
import { ApiGetSortReportsByAlgorithmId, SortHistoryResponse } from "../ApiRequests";

interface Props {
    algorithmId: number | undefined;
}

export default function Scoreboard({ algorithmId }: Props) {
    const [sortHistory, setSortHistory] = useState<SortHistoryResponse[] | undefined>([]);

    useEffect(() => {
        const getSortHistories = async () => {
            let histories = await ApiGetSortReportsByAlgorithmId(algorithmId);
            console.log(histories);

            setSortHistory(histories);
        };

        getSortHistories();
    }, []);

    useEffect(() => {}, [sortHistory]);

    return (
        <div className="flex flex-col grow rounded-xl text-center bg-cyan-400 dark:bg-cyan-700">
            <h2 className="text-4xl font-bold tracking-widest">Scoreboard</h2>
            <div className="flex-grow text-left justify-center items-center flex-col p-6 rounded-xl bg-blue-300 dark:bg-slate-600">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>Sorting time</th>
                            <th>Date sorted</th>
                            <th>Times compared</th>
                            <th>Array accesses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortHistory?.map((item, index) => (
                            <tr key={index}>
                                <td>TBD</td>
                                <td>{item.sortStarted}</td>
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
