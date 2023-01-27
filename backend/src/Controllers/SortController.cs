using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using src.Actions;
using src.Models;

namespace src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SortController : ControllerBase
{
    Algorithms sorts = new();
    ArrayHandler arrHandlr = new();

    [HttpGet("GetAllSortingAlgorithms")]
    public IActionResult GetAllSortingAlgorithmsAsync()
    {
        var result = sorts.GetAllAlgorithms();
        return Ok(result);
    }

    [HttpPost("PerformSort")]
    public IActionResult PerformSortAsync(string algorithm, int arrSize)
    {
        var doesAlgorithmExist = sorts.GetAllAlgorithms().Contains(algorithm);

        if (!doesAlgorithmExist) return NotFound();

        var scrambledArr = arrHandlr.ScrambleArray(arrHandlr.CreateOrderedArray(arrSize));
        SortHistory result = sorts.BubbleSort(scrambledArr);
        string resultJson = JsonSerializer.Serialize(result);

        return Ok(resultJson);
    }
}
