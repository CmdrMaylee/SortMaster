import "../css/BarContainer.css";
import BarsPillar from "./BarsPillar";

interface Props {
    arr: number[];
    visualHeight: number;
}

const RenderBars = (arr: number[], visualHeight: number) => {
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

export default function Bars({ arr, visualHeight }: Props) {
    return <div className="barContainer">{RenderBars(arr, visualHeight)}</div>;
}
