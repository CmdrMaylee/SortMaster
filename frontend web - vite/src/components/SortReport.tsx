import { ApiGetSortReportsByAlgorithmId, ApiSendSortReport } from "../ApiRequests";

export interface SortReportApiModel {
    AlgorithmId: number;
    SortStarted: Date;
    SortEnded: Date;
    TimesCompared: number;
    ArrayAccesses: number;
    SortingAttempts: number;
    WasCancelled: boolean;
    GetFormatedSortEnd: string;
    GetTimeSpan: string;
}

interface Props {
    report: SortReportApiModel;
    algorithmName: string | undefined;
}

export default function SortReport({ report, algorithmName }: Props) {
    async function SendReport() {
        const send = {
            AlgorithmId: report.AlgorithmId,
            SortStarted: report.SortStarted,
            SortEnded: report.SortEnded,
            TimesCompared: report.TimesCompared,
            ArrayAccesses: report.ArrayAccesses,
            SortingAttempts: report.SortingAttempts,
            WasCancelled: false,
        };
        let result = await ApiSendSortReport(send);
    }

    async function demo() {
        let result = await ApiGetSortReportsByAlgorithmId(0);
        console.log(result);
    }

    if (!report) {
        return <></>;
    }
    return (
        <>
            {/* Sort info */}
            <div className="flex justify-center items-center flex-col p-6 m-8 mb-4 rounded-xl bg-blue-300 dark:bg-slate-600">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Successfull sort!</h2>
                    <div className="mt-6 flex mx-auto items-center flex-col">
                        <div>
                            <p>Algorithm: {algorithmName}</p>
                            <p>Array access count: {report.ArrayAccesses}</p>
                            <p>Comparisons: {report.TimesCompared}</p>
                            <p>Total time to sort: {report.GetTimeSpan}</p>
                            <p>Sort finished: {report.GetFormatedSortEnd}</p>
                        </div>
                        <div className="w-1/2 mt-6"></div>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={SendReport}
                    className="bg-slate-200 dark:bg-slate-700 border-t-4 border-pink-400 px-6 py-1 m-4 rounded text-3xl text-green-700 dark:text-green-300 drop-shadow-md hover:border-x-4"
                >
                    <p>Send to Scoreboard</p>
                </button>
            </div>
        </>
    );
}
