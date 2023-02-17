using System.ComponentModel.DataAnnotations;

namespace src.Models;

public class Algorithm
{
    [Key]
    public Guid AlgorithmId { get; set; }
    public string AlgorithmName { get; set; }
    public string BigONotation { get; set; }
}
