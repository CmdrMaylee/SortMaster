import { SortReportApiModel } from "./components/SortReport";

export interface AlgorithmResponse {
    algorithmName: string;
    bigONotationBest: string;
    bigONotationWorst: string;
    bigONotationAverage: string;
    descriptionText: string;
    performanceText: string;
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
    return parsed;
}

export async function ApiSendSortReport(sortReport: SortReportApiModel) {
    const sendBody = JSON.stringify(sortReport);
    console.log(sendBody);

    let response = await fetch(`http://localhost:5160/api/SortHistory/SubmitSortHistory`, {
        method: "POST",
        body: JSON.stringify({ algorithmId: 0 }),
    });
    let parsed = await response.json();
    console.log(parsed);
}

export async function ApiGetSortReportsByAlgorithmId(algorithmId: number) {
    let response = await fetch(
        `http://localhost:5160/api/SortHistory/GetSortHistoriesByAlgorithmId/${algorithmId}`
    );
    return response;
}
