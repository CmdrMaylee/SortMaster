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
    console.log(parsed);
}
