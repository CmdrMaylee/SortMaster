import { useState } from "react";
import { ApiSendSortReport } from "../ApiRequests";

export interface SortReportApiModel {
    AlgorithmId: number;
    SortStarted: Date;
    SortEnded: Date;
    ArraySize: number;
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
    const [sendingReport, setSendingReport] = useState(false);
    const [wasSent, setWasSent] = useState(false);

    async function SendReport() {
        setWasSent(false);
        setSendingReport(true);
        const send = {
            AlgorithmId: report.AlgorithmId,
            SortStarted: report.SortStarted,
            SortEnded: report.SortEnded,
            ArraySize: report.ArraySize,
            TimesCompared: report.TimesCompared,
            ArrayAccesses: report.ArrayAccesses,
            SortingAttempts: report.SortingAttempts,
            WasCancelled: false,
        };
        let result = await ApiSendSortReport(send);
        setSendingReport(false);
        setWasSent(true);
    }

    if (!report) {
        return <></>;
    }
    return (
        <>
            {/* Sort info */}
            <div className="grow rounded-xl text-center bg-amber-400 dark:bg-amber-700">
                {wasSent}
                <h2 className="text-4xl font-bold tracking-widest">Result</h2>
                <div className="flex justify-center items-center flex-col p-6 rounded-xl bg-blue-300 dark:bg-slate-600">
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

                    {!sendingReport && (
                        <button
                            type="button"
                            onClick={SendReport}
                            disabled={sendingReport}
                            className="bg-slate-200 dark:bg-slate-700 border-t-4 border-pink-400 px-6 py-1 m-4 rounded text-3xl text-green-700 dark:text-green-300 drop-shadow-md hover:border-x-4"
                        >
                            {!sendingReport && <p>Send to Scoreboard</p>}
                            {sendingReport && <p>Sending...</p>}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
