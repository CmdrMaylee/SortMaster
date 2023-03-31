interface Props {
    message: string;
    title: string;
}

export default function WarningMessage({ message, title }: Props) {
    return (
        <div className="flex justify-center items-center flex-col p-6 m-8 mb-4 rounded-xl bg-blue-300 dark:bg-slate-600">
            <div className="text-center">
                <h2 className="text-3xl text-red-400">{title}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
}
