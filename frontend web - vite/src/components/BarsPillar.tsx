interface Props {
    barIndex: number;
    totalBarsSize: number;
    visualHeight: number;
}

export default function BarsPillar({ totalBarsSize, barIndex, visualHeight }: Props) {
    const baseHeight = 30;
    const heightDiff = barIndex / totalBarsSize;
    const heightResult = heightDiff * baseHeight * visualHeight;

    return (
        <div
            style={{
                height: heightResult,
            }}
            className={`bg-blue-600 grow basis-0`}
        ></div>
    );
}
