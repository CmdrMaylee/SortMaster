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

            setSortHistory(histories);
        };

        getSortHistories();
    }, []);

    return (
        <div className="flex justify-center items-center flex-col p-6 mt-6 mr-6 rounded-xl bg-blue-300 dark:bg-slate-600">
            <table className="table-auto"></table>
        </div>
    );
}
