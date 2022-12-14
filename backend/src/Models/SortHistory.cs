using System.ComponentModel.DataAnnotations;

namespace src.Models;

public class SortHistory
{
    [Key]
    public Guid Id { get; set; }
    public int AlgorithmId { get; set; }
    public DateTime SortStarted { get; set; }
    public DateTime SortEnded { get; set; }
    public int TimesCompared { get; set; }
    public int ArrayAccesses { get; set; }
    public bool WasCancelled { get; set; } = false;
}
