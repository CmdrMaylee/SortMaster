using System.ComponentModel.DataAnnotations;

namespace src.Models;

public class SortHistory
{
    [Key]
    public Guid Id { get; set; }
    public int AlgorithmId { get; set; }
    public DateTime SortStarted { get; set; }
    public DateTime SortEnded { get; set; }
    public long TimesCompared { get; set; }
    public long ArrayAccesses { get; set; }
    public long SortingAttempts { get; set; }
    public bool WasCancelled { get; set; } = false;

    public TimeSpan GetTimeSpan
    {
        get
        {
            return this.SortEnded.Subtract(this.SortStarted);
        }
    }
}
