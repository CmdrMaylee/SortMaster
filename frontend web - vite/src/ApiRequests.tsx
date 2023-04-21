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

interface PerformSortResponse {}

export async function ApiFetchAlgorithms() {
    let response = await fetch("http://localhost:5160/api/Algorithm/GetAllSortingAlgorithms");
    let parsed = (await response.json()) as AlgorithmResponse[];
    return parsed;
}

export async function ApiPerformSort(selectedAlgorithm: string, arrSize: number) {
    let response = await fetch(
        `http://localhost:5160/api/Sort/PerformSort?algorithm=${selectedAlgorithm}&arrSize=${arrSize}`,
        {
            method: "POST",
        }
    );
    let parsed = await response.json();
    console.log(parsed);

    return parsed;
}

export async function ApiSendSortReport(sortReport: any) {
    let response = await fetch(`http://localhost:5160/api/SortHistory/SubmitSortHistory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sortReport),
    });
    let parsed = await response.json();
}

export async function ApiGetSortReportsByAlgorithmId(algorithmId: number | undefined) {
    let response = await fetch(
        `http://localhost:5160/api/SortHistory/GetSortHistoriesByAlgorithmId/${algorithmId}`
    );
    let parsed = (await response.json()) as SortHistoryResponse[];
    return parsed;
}
