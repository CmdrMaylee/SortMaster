using System.ComponentModel.DataAnnotations;

namespace backend.Models;

public class Algorithm
{
    [Key]
    public int AlgorithmId { get; set; }
    public string AlgorithmName { get; set; } = "NoSort";
    public string BigONotationBest { get; set; } = "O(?)";
    public string BigONotationWorst { get; set; } = "O(?)";
    public string BigONotationAverage { get; set; } = "O(?)";
    public string DescriptionText { get; set; } = "Null";
    public string PerformanceText { get; set; } = "Null";
}
