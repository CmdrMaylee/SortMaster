namespace backend.Services;

public class ArrayHandler
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
                Swap(ref arr, i, randomIndex);
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

    public void Swap(ref int[] arr, int num1, int num2)
    {
        int temp = arr[num1];
        arr[num1] = arr[num2];
        arr[num2] = temp;
    }
}
