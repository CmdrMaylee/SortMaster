import "../css/BarContainer.css";
import BarsPillar from "./BarsPillar";

interface Props {
    arr: number[];
    visualHeight: number;
}

const RenderBars = (arr: number[]) => {
    return (
        <>
            {arr.map((num) => (
                <BarsPillar
                    barIndex={num}
                    totalBarsSize={arr.length}
                    visualHeight={10}
                    color="blue"
                    key={num}
                />
            ))}
        </>
    );
};

export default function Bars({ arr }: Props) {
    return <div className="barContainer">{RenderBars(arr)}</div>;
}
