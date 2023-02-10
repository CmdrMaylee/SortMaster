using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using src.Actions;

namespace src.Models;

public class SortHistory
{
    [Key]
    public Guid Id { get; set; }
    [ForeignKey("")]
    public int AlgorithmId { get; set; }
    public DateTime SortStarted { get; set; }
    public DateTime SortEnded { get; set; }
    public long TimesCompared { get; set; }
    public long ArrayAccesses { get; set; }
    public long SortingAttempts { get; set; }
    public bool WasCancelled { get; set; } = false;
    public bool WasCorrectlySorted { get; set; } = false;

    public TimeSpan GetTimeSpan
    {
        get
        {
            return this.SortEnded.Subtract(this.SortStarted);
        }
    }

    public SortHistory(int[] arr)
    {
        if (arr.Length < 1) return;

        ArrayHandler arrHandlr = new();

        if (arr is not null)
        {
            bool isCorrectlySorted = arrHandlr.CheckSorted(arr);

            if (isCorrectlySorted)
                this.WasCorrectlySorted = true;
        }
    }
}
