using src.Models;

namespace src.Actions;

class Algorithms
{
    private ArrayHandler arrHandlr = new();

    private List<string> AlgorithmCollection = new()
    {
        "BubbleSort",
        "InsertionSort",
        "BogoSort",
        "CombSort"
    };

    // public List<string> GetAllAlgorithms() => AlgorithmCollection;

    public SortHistory? PerformSort(string algorithm, int arrSize)
    {
        var arrHandlr = new ArrayHandler();

        var algorithmIndex = this.AlgorithmCollection.IndexOf(algorithm);
        var scrambledArr = arrHandlr.ScrambleArray(arrHandlr.CreateOrderedArray(arrSize));

        switch (algorithmIndex)
        {
            case 0:
                return BubbleSort(scrambledArr);
            case 1:
                return InsertionSort(scrambledArr);
            case 2:
                return BogoSort(scrambledArr);
            case 3:
                return CombSort(scrambledArr);
            default:
                return null;
        }
    }

    public SortHistory BubbleSort(int[] arr)
    {
        bool isSorted;
        long timesCompared = 0;
        long arrayAccesses = 0;

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

        SortHistory sh = new(/* arr */)
        {
            AlgorithmId = 0,
            SortStarted = timeStart,
            SortEnded = timeStop,
            ArraySize = arr.Length,
            TimesCompared = timesCompared,
            ArrayAccesses = arrayAccesses,
            SortingAttempts = 1,
            WasCorrectlySorted = true
        };

        return sh;
    }

    public SortHistory CombSort(int[] arr)
    {
        bool isSorted = false;
        long timesCompared = 0;
        long arrayAccesses = 0;

        int swap = 0;
        int gap = arr.Length;
        float shrink = 1.3F;

        DateTime timeStart = DateTime.Now;
        do
        {
            gap = (int)Math.Floor(gap / shrink);

            if (gap < 1)
            {
                isSorted = true;
                gap = 1;
            }

            for (int i = 0; i < arr.Length - gap; i++)
            {
                arrayAccesses += 2;
                timesCompared++;
                swap = gap + i;

                if (arr[i] > arr[swap])
                {
                    arrayAccesses += 3;
                    int temp = arr[i];
                    arr[i] = arr[swap];
                    arr[swap] = temp;
                    isSorted = false;
                }
            }

        } while (isSorted == false);
        DateTime timeStop = DateTime.Now;

        SortHistory sh = new(/* arr */)
        {
            AlgorithmId = 3,
            SortStarted = timeStart,
            SortEnded = timeStop,
            ArraySize = arr.Length,
            TimesCompared = timesCompared,
            ArrayAccesses = arrayAccesses,
            SortingAttempts = 1,
            WasCorrectlySorted = true
        };

        return sh;
    }

    public SortHistory InsertionSort(int[] arr)
    {
        bool isSorted;
        long timesCompared = 0;
        long arrayAccesses = 0;
        DateTime timeStart = DateTime.Now;

        int checkpoint = 0;

        do
        {
            isSorted = true;

            for (int i = 1; i < arr.Length - 1; i++)
            {
                timesCompared++;

                arrayAccesses += 2;
                if (arr[i] < arr[i - 1])
                {
                    isSorted = false;
                    checkpoint = i - 1;

                    int tempIndex = i;
                    do
                    {
                        arrayAccesses += 3;
                        timesCompared++;
                        int swap = arr[tempIndex];
                        arr[tempIndex] = arr[tempIndex - 1];
                        arr[tempIndex - 1] = swap;

                        if (tempIndex == 1) break;
                        tempIndex--;
                    } while (arr[tempIndex - 1] > arr[tempIndex]);

                }
                else if (i == arr.Length)
                {
                    isSorted = true;
                }
            }
        } while (isSorted == false);
        DateTime timeStop = DateTime.Now;

        SortHistory sh = new(/* arr */)
        {
            AlgorithmId = 1,
            SortStarted = timeStart,
            SortEnded = timeStop,
            ArraySize = arr.Length,
            TimesCompared = timesCompared,
            ArrayAccesses = arrayAccesses,
            SortingAttempts = 1,
            WasCorrectlySorted = true
        };

        return sh;
    }

    public SortHistory? BogoSort(int[] arr/* , CancellationToken token */)
    {
        bool isSorted;
        long arrayAccesses = 0;
        long sortingAttempts = 0;

        DateTime timeStart = DateTime.Now;
        do
        {
            sortingAttempts++;
            // token.ThrowIfCancellationRequested();
            isSorted = false;

            arrayAccesses += arr.Length;

            arr = arrHandlr.ScrambleArray(arr);
            isSorted = arrHandlr.CheckSorted(arr);
        } while (isSorted == false);
        DateTime timeStop = DateTime.Now;

        SortHistory sh = new(/* arr */)
        {
            AlgorithmId = 2,
            SortStarted = timeStart,
            SortEnded = timeStop,
            ArraySize = arr.Length,
            TimesCompared = 1,
            ArrayAccesses = arrayAccesses,
            SortingAttempts = sortingAttempts,
            WasCorrectlySorted = true
        };

        return sh;
    }
}
