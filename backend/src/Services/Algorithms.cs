using backend.Models;

namespace backend.Services;

public class Algorithms
{
    private ArrayHandler arrHandlr = new();

    private List<string> AlgorithmCollection = new()
    {
        "BubbleSort",
        "InsertionSort",
        "BogoSort",
        "CombSort",
        "QuickSort"
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
            case 4:
                return QuickSort(scrambledArr);
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
                    arrHandlr.Swap(ref arr, i, i + 1);
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
                    arrHandlr.Swap(ref arr, i, swap);
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
                        arrHandlr.Swap(ref arr, tempIndex, tempIndex - 1);

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

    public SortHistory? QuickSort(int[] arr)
    {
        long arrayAccesses = 0;
        long timesCompared = 0;
        bool wasCorrectlySorted = true;

        DateTime timeStart = DateTime.Now;

        QuickSortStart(arr, 0, arr.Length - 1, ref arrayAccesses, ref timesCompared);

        DateTime timeStop = DateTime.Now;

        wasCorrectlySorted = arrHandlr.CheckSorted(arr);

        SortHistory sh = new()
        {
            AlgorithmId = 4,
            SortStarted = timeStart,
            SortEnded = timeStop,
            ArraySize = arr.Length,
            TimesCompared = timesCompared,
            ArrayAccesses = arrayAccesses,
            SortingAttempts = 1,
            WasCorrectlySorted = wasCorrectlySorted
        };

        return sh;
    }

    public void QuickSortStart(int[] arr, int lo, int hi, ref long arrAccess, ref long compare)
    {
        if (lo < hi)
        {
            int pi = QuickSortPartition(arr, lo, hi, ref arrAccess, ref compare);

            QuickSortStart(arr, lo, pi - 1, ref arrAccess, ref compare);
            QuickSortStart(arr, pi + 1, hi, ref arrAccess, ref compare);
        }
    }

    public int QuickSortPartition(int[] arr, int lo, int hi, ref long arrAccess, ref long compare)
    {
        int pivot = arr[hi];
        arrAccess++;

        int i = lo - 1;

        for (int j = lo; j <= hi - 1; j++)
        {
            if (arr[j] < pivot)
            {
                compare++;
                i++;
                arrHandlr.Swap(ref arr, i, j);
                arrAccess += 3;
            }
        }
        arrHandlr.Swap(ref arr, i + 1, hi);
        arrAccess += 3;
        return i + 1;
    }
}
