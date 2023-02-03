using src.Models;

namespace src.Actions;

class Algorithms
{
    List<string> AlgorithmCollection = new()
    {
        "BubbleSort"
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

        SortHistory sh = new(arr);

        sh.AlgorithmId = 0;
        sh.SortStarted = timeStart;
        sh.SortEnded = timeStop;
        sh.TimesCompared = timesCompared;
        sh.ArrayAccesses = arrayAccesses;
        sh.SortingAttempts = sortingAttempts;

        return sh;
    }

    /* void InsertionSort(int[] arr)
    {
        SortReport sr = new();
        sr.AlgorithmId = 1;

        bool isSorted = true;
        bool settingOutOfPlace = false;
        int checkpoint = 0;

        do
        {
            sr.ArrayAccesses += 2;
            for (int i = 0; i < arr.Length; i++)
            {
                sr.TimesCompared++;
                if (arr[i] > arr[i + 1])
                {
                    sr.ArrayAccesses += 3;
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    isSorted = false;
                    settingOutOfPlace = true;
                }
                else if (settingOutOfPlace)
                {
                    i = checkpoint - 1;
                    settingOutOfPlace = false;
                }
            }
        } while (isSorted == false);
    } */
}
