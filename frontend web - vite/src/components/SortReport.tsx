export interface SortReportModel {
    AlgorithmName: string;
    GetTimeSpan: string;
    GetFormatedSortEnd: string;
    TimesCompared: number;
    ArrayAccesses: number;
    SortingAttempts: number;
}

interface Props {
    report: SortReportModel;
}

export default function SortReport({ report }: Props) {
    if (!report) {
        return <></>;
    }
    return (
        <>
            {/* Sort info */}
            <div className="p-6 mt-6 rounded-xl bg-blue-300 dark:bg-slate-600">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Successfull sort!</h2>
                    <div className="mt-6 flex mx-auto items-center justify-around flex-col md:flex-row">
                        <div>
                            <p>Algorithm: {report.AlgorithmName}</p>
                            <p>Array access count: {report.ArrayAccesses}</p>
                            <p>Comparisons: {report.TimesCompared}</p>
                            <p>Total time to sort: {report.GetTimeSpan}</p>
                            <p>Sort finished: {report.GetFormatedSortEnd}</p>
                        </div>
                        <div className="w-1/2 mt-6"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
