using src.Models;

namespace src.Actions;

class Algorithms
{
    List<string> AlgorithmCollection = new()
    {
        "BubbleSort",
        "InsertionSort"
    };

    public List<string> GetAllAlgorithms() => AlgorithmCollection;

    public SortHistory BubbleSort(int[] arr)
    {
        bool isSorted;
        long timesCompared = 0;
        long arrayAccesses = 0;
        long sortingAttempts = 0;
        DateTime timeStart = DateTime.Now;
        do
        {
            isSorted = true;

            for (int i = 0; i < arr.Length - 1; i++)
            {
                arrayAccesses += 2;
                timesCompared++;
                if (arr[i] > arr[i + 1])
                {
                    arrayAccesses += 3;
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    isSorted = false;
                }

            }

        } while (isSorted == false);
        DateTime timeStop = DateTime.Now;

        SortHistory sh = new(/* arr */);

        sh.AlgorithmId = 0;
        sh.SortStarted = timeStart;
        sh.SortEnded = timeStop;
        sh.TimesCompared = timesCompared;
        sh.ArrayAccesses = arrayAccesses;
        sh.SortingAttempts = sortingAttempts;

        return sh;
    }

    public SortHistory InsertionSort(int[] arr)
    {
        bool isSorted;
        long timesCompared = 0;
        long arrayAccesses = 0;
        long sortingAttempts = 0;
        DateTime timeStart = DateTime.Now;

        bool settingOutOfPlace = false;
        int checkpoint = 0;

        do
        {
            isSorted = true;

            arrayAccesses += 2;
            for (int i = 0; i < arr.Length; i++)
            {
                timesCompared++;

                if (arr[i] > arr[i + 1])
                {
                    arrayAccesses += 3;
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    isSorted = false;
                    if (checkpoint == 0)
                    {
                        settingOutOfPlace = true;
                        checkpoint = i - 1;
                    }

                    if (i != 0)
                        i -= 2;
                }
                else if (settingOutOfPlace)
                {
                    settingOutOfPlace = false;
                    i = checkpoint;
                }
            }
        } while (isSorted == false);
        DateTime timeStop = DateTime.Now;

        SortHistory sh = new(/* arr */)
        {
            AlgorithmId = 0,
            SortStarted = timeStart,
            SortEnded = timeStop,
            TimesCompared = timesCompared,
            ArrayAccesses = arrayAccesses,
            SortingAttempts = sortingAttempts
        };

        return sh;
    }
}
