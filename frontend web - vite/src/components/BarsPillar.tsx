interface Props {
    barIndex: number;
    totalBarsSize: number;
    color: string;
    visualHeight: number;
}

export default function BarsPillar({ totalBarsSize, barIndex, color, visualHeight }: Props) {
    const baseHeight = 30;
    const heightDiff = barIndex / totalBarsSize;
    const heightResult = heightDiff * baseHeight * visualHeight + "px";

    return (
        <div
            style={{
                backgroundColor: color,
                height: heightResult,
                flexGrow: 1,
                flexBasis: 0,
                margin: "5px",
            }}
        ></div>
    );
}
