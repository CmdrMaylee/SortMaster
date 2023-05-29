export interface AlgorithmResponse {
    algorithmId: number;
    algorithmName: string;
    bigONotationBest: string;
    bigONotationWorst: string;
    bigONotationAverage: string;
    descriptionText: string;
    performanceText: string;
}

export interface SortHistoryResponse {
    sortStarted: string;
    sortEnded: string;
    timesCompared: number;
    arraySize: number;
    arrayAccesses: number;
    sortingAttempts: number;
    wasCorrectlySorted: number;
    getTimeSpan: string;
    getFormatedSortEnd: string;
}

let connectionAddress = "localhost";

export async function ApiFetchAlgorithms() {
    let response;
    try {
        response = await fetch(`http://${connectionAddress}:5160/api/Algorithms`);
    } catch (e) {
        return undefined;
    }

    if (!response.ok) return undefined;

    let parsed = (await response.json()) as AlgorithmResponse[];
    return parsed;
}

export async function ApiPerformSort(selectedAlgorithm: string, arrSize: number) {
    let response = await fetch(
        `http://${connectionAddress}:5160/api/Sort/PerformSort?algorithm=${selectedAlgorithm}&arrSize=${arrSize}`,
        {
            method: "POST",
        }
    );
    let parsed = await response.json();

    return parsed;
}

export async function ApiSendSortReport(sortReport: any) {
    let response = await fetch(`http://${connectionAddress}:5160/api/SortHistory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sortReport),
    });
    let parsed = await response.json();
}

export async function ApiGetSortReportsByAlgorithmId(algorithmId: number | undefined) {
    let response = await fetch(`http://${connectionAddress}:5160/api/SortHistory/${algorithmId}`);
    let parsed = (await response.json()) as SortHistoryResponse[];
    return parsed;
}

export async function ApiGetSortReportTableRowsTotal(algorithmId: number | undefined) {
    let response = await fetch(`http://${connectionAddress}:5160/api/SortHistory/${algorithmId}`);
    let parsed = await response.json();
    return parsed;
}

export async function ApiGetAlgorithmById(algorithmId: number | undefined) {
    let response = await fetch(`http://${connectionAddress}:5160/api/SortHistory/${algorithmId}`);
    let parsed = (await response.json()) as AlgorithmResponse;
    return parsed;
}
