import React from "react";

export default function SortInfo() {
    return (
        <>
            {/* Sort info */}
            <div className="p-6 mt-6 rounded-xl bg-blue-300 dark:bg-slate-600">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">BubbleSort</h2>
                    <p className="mx-auto md:w-1/2">
                        One of the most well known algorithms, with a classic beginner-friendly
                        approach to sorting techniques. Compare the first two numbers, flip them if
                        they are out of order, compare the second number with the next one, switch
                        their places if they are out of order, repeat.
                    </p>

                    <div className="mt-6 flex mx-auto items-center justify-around flex-col md:flex-row">
                        <div>
                            <h4 className="text-xl">Big O Notation</h4>
                            <p>Best case: O(n)</p>
                            <p>Worst case: O(n²)</p>
                            <p>Average case: O(n²)</p>
                        </div>
                        <div className="w-1/2 mt-6">
                            <h4 className="text-xl">Performance</h4>
                            <p>
                                The time it takes to sort a sequence increases exponentially,
                                because (almost) every number has to be checked for every sequence
                                done. Double the initial quantity and you quadruple the initial
                                sorting time, e.g. if 10,000 items takes 0.5 seconds to sort, a list
                                of 20,000 items will usually take 2 seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
