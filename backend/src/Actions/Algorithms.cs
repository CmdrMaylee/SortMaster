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
        SortHistory sh = new();
        sh.AlgorithmId = 0;

        bool isSorted;
        sh.SortStarted = DateTime.Now;
        do
        {
            isSorted = true;

            for (int i = 0; i < arr.Length - 1; i++)
            {
                sh.ArrayAccesses += 2;
                sh.TimesCompared++;
                if (arr[i] > arr[i + 1])
                {
                    sh.ArrayAccesses += 3;
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    isSorted = false;
                }

            }

        } while (isSorted == false);
        sh.SortEnded = DateTime.Now;

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
