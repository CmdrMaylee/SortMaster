import "../css/BarContainer.css";
import BarsBar from "./BarsBar";

interface Props {
    arr: number[];
    visualHeight: number;
}

const RenderBars = (arr: number[]) => {
    return (
        <>
            {arr.map((num) => (
                <BarsBar barIndex={num} totalBarsSize={arr.length} visualHeight={10} color="blue" />
            ))}
        </>
    );
};

export default function Bars({ arr }: Props) {
    return <div className="barContainer">{RenderBars(arr)}</div>;
}