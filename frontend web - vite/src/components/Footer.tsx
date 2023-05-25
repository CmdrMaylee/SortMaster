import lightGithub from "../assets/img/github-mark-white.png";

export default function Footer() {
    return (
        <>
            <div className="mx-3 rounded-t-2xl border-b-4 border-violet-500 bg-blue-300 dark:bg-slate-600">
                <div className="flex justify-center items-center flex-col sm:justify-between mx-4">
                    <div className="flex flex-col sm:flex-row items-center justify-around w-full md:text-3xl text-2xl">
                        <div>
                            <p className="" style={{ fontFamily: "verdana, sans-serif" }}>
                                SortMaster
                            </p>
                        </div>
                        <div>
                            <p style={{ fontFamily: "verdana, sans-serif" }}>ソート マスター</p>
                        </div>
                    </div>
                    <a href="https://github.com/CmdrMaylee" target="_blank">
                        <div className="flex items-center w-full py-4">
                            <img src={lightGithub} className="w-10" />
                            <p>McJeffrey</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
