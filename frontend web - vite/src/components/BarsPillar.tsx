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

    return (
        <div
            style={{
                height: heightResult,
            }}
            className={`bg-blue-600 rounded-xl grow basis-0 m-[1px]`}
        ></div>
    );
}
