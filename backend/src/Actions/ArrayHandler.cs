namespace src.Actions;

class ArrayHandler
{
    public int[] CreateOrderedArray(int size)
    {
        int[] result = new int[size];
        for (int i = 0; i < result.Length; i++)
            result[i] = i;

        return result;
    }

    public int[] ScrambleArray(int[] arr)
    {
        Random randy = new();

        for (int scrambles = 0; scrambles < 5; scrambles++)
        {

            for (int i = 0; i < arr.Length; i++)
            {
                int randomIndex = randy.Next(arr.Length);

                int temp = arr[i];
                arr[i] = arr[randomIndex];
                arr[randomIndex] = temp;
            }

        }

        return arr;
    }

    public bool CheckSorted(int[] arr)
    {
        for (int i = 0; i < arr.Length - 1; i++)
            if (arr[i] > arr[i + 1]) return false;

        return true;
    }
}
