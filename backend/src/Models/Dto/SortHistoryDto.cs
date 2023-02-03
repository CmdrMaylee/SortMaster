namespace src.Models.Dto;

public class SortHistoryDto
{
    public int AlgorithmId { get; set; }
    public DateTime SortStarted { get; set; }
    public DateTime SortEnded { get; set; }
    public int TimesCompared { get; set; }
    public int ArrayAccesses { get; set; }
    public bool WasCancelled { get; set; } = false;

    // TODO Solve issue regarding SortHistory requiring an int-array in its constructor at all times, making one of the controller functions invalid.
    public int[] Array { get; set; } = { };
}