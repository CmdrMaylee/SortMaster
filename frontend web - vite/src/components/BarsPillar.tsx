interface Props {
    barIndex: number;
    totalBarsSize: number;
    color: string;
    visualHeight: number;
}

export default function BarsPillar({ totalBarsSize, barIndex, color, visualHeight }: Props) {
    const baseHeight = 30;
    const heightDiff = barIndex / totalBarsSize;
    const heightResult = heightDiff * baseHeight * visualHeight;
    const cssBgColor = "bg-" + color + "-500";

    return (
        <div
            style={{
                height: heightResult,
            }}
            className={`${cssBgColor} grow basis-0 m-3`}
        ></div>
    );
}
