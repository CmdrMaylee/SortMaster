interface Props {
    message: string;
    title: string;
}

export default function WarningMessage({ message, title }: Props) {
    return (
        <div className="rounded-xl text-center bg-red-400 dark:bg-red-700">
            <h2 className="text-4xl font-bold tracking-widest">Warning</h2>
            <div className="h-full flex justify-center items-center flex-col p-6 rounded-xl bg-red-500 dark:bg-slate-800">
                <div className="text-center">
                    <p className="font-bold">{message}</p>
                </div>
            </div>
        </div>
    );
}
