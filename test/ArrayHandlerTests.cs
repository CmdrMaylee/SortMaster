using backend.Services;

namespace Testing.ArrayHandlerTests;

public class ArrayHandlerTests
{
    ArrayHandler arrHandlr = new();

    [Theory]
    [InlineData(10)]
    [InlineData(100)]
    [InlineData(50.1)]
    public void CheckSorted_PredeterminedArray_Correctly(int arrSize)
    {
        // ARRANGE //
        int[] input = arrHandlr.CreateOrderedArray(arrSize);

        // ACT //
        bool result = arrHandlr.CheckSorted(input);

        // ASSERT //
        Assert.True(result);
    }

    [Fact]
    public void CheckSorted_OnAlteredSortedArray_ReturnFalse()
    {
        // ARRANGE //
        int[] alter = arrHandlr.CreateOrderedArray(10);
        int temp = alter[0];
        alter[0] = alter[1];
        alter[1] = temp;

        // ACT //
        bool result = arrHandlr.CheckSorted(alter);

        // ASSERT //
        Assert.False(result);
    }
}
