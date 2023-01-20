interface Props {
    barIndex: number;
    totalBarsSize: number;
    color: string;
    visualHeight: number;
}

export default function BarsBar({ totalBarsSize, barIndex, color }: Props) {
    const baseHeight = 300;
    const heightDiff = barIndex / totalBarsSize;
    const heightResult = heightDiff * baseHeight + "px";

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
