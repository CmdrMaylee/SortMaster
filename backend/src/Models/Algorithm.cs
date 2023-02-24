using System.ComponentModel.DataAnnotations;

namespace src.Models;

public class Algorithm
{
    [Key]
    public int AlgorithmId { get; set; }
    public string AlgorithmName { get; set; }
    public string BigONotationBest { get; set; }
    public string BigONotationWorst { get; set; }
    public string BigONotationAverage { get; set; }
    public string DescriptionText { get; set; }
    public string PerformanceText { get; set; }
}
