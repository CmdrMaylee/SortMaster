interface Props {
    algorithm: string;
}

export default function WarningMessage({ algorithm }: Props) {
    return (
        <div className="flex justify-center items-center flex-col p-6 mt-6 mr-6 rounded-xl bg-blue-300 dark:bg-slate-600"></div>
    );
}
