using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using backend.Services;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SortController : ControllerBase
{
    Algorithms algorithmCore = new();

    [HttpPost("PerformSort")]
    public IActionResult PerformSort(string algorithm, int arrSize)
    {
        var result = algorithmCore.PerformSort(algorithm, arrSize);

        if (result == null)
            return BadRequest("Algorithm not found");

        string resultJson = JsonSerializer.Serialize(result);

        return Ok(resultJson);
    }
}
