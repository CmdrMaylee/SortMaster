import BarsPillar from "./BarsPillar";

interface Props {
    arr: number[];
    visualHeight: number;
    randomize: boolean;
}

function shuffle(array: number[]) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const RenderBars = (arr: number[], visualHeight: number, randomize: boolean) => {
    arr = arr.slice(0, 100);

    if (randomize) arr = shuffle(arr);

    return (
        <>
            {arr.map((num) => (
                <BarsPillar
                    barIndex={num}
                    totalBarsSize={arr.length}
                    visualHeight={visualHeight}
                    color="blue"
                    key={num}
                />
            ))}
        </>
    );
};

export default function Bars({ arr, visualHeight, randomize }: Props) {
    return <div className="flex items-end">{RenderBars(arr, visualHeight, randomize)}</div>;
}
