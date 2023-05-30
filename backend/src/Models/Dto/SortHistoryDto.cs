namespace backend.Models.Dto;

public class SortHistoryDto
{
    public int AlgorithmId { get; set; }
    public DateTime SortStarted { get; set; }
    public DateTime SortEnded { get; set; }
    public long ArraySize { get; set; }
    public long TimesCompared { get; set; }
    public long ArrayAccesses { get; set; }
    public long SortingAttempts { get; set; }
    public bool WasCancelled { get; set; } = false;

    // TODO Solve issue regarding SortHistory requiring an int-array in its constructor at all times, making one of the controller functions invalid.
    // public int[] Array { get; set; } = { };
}