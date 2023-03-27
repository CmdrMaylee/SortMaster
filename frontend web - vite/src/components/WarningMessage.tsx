interface Props {
    message: string;
    title: string;
    canCancel: boolean;
}

export default function WarningMessage({ message, title, canCancel }: Props) {
    return (
        <div className="flex justify-center items-center flex-col p-6 m-8 mb-4 rounded-xl bg-blue-300 dark:bg-slate-600">
            <div className="text-center">
                <h2 className="text-3xl text-red-400">{title}</h2>
                <p>{message}</p>
                {canCancel && (
                    <button
                        type="button"
                        className="bg-slate-200 dark:bg-slate-700 border-b-4 border-red-600 px-6 py-1 m-4 rounded text-3xl text-green-700 dark:text-green-300 drop-shadow-md hover:border-x-4"
                    >
                        Cancel Sort
                    </button>
                )}
            </div>
        </div>
    );
}
