using src.Models;

class Algorithms
{
    SortReport BubbleSort(int[] arr)
    {
        SortReport sr = new();
        sr.AlgorithmId = 0;

        bool isSorted;
        do
        {
            isSorted = true;

            for (int i = 0; i < arr.Length; i++)
            {
                sr.ArrayAccesses += 2;
                sr.TimesCompared++;
                if (arr[i] > arr[i + 1])
                {
                    sr.ArrayAccesses += 3;
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    isSorted = false;
                }

            }

        } while (isSorted == false);

        return sr;
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
