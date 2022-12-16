using Microsoft.AspNetCore.Mvc;
using src.Models;
using src.Repositories.Interfaces;

namespace src.Controllers;

[ApiController]
[Route("api/history/[controller]")]
public class SortRecordController : ControllerBase
{
    private readonly ISortHistoryRepository sortHistoryRepository;

    [HttpGet("GetDemoString")]
    public string GetDemoString()
    {
        return "Thing happened!";
    }

    [HttpGet("GetAllSortHistories/{id}")]
    public IEnumerable<SortHistory> GetAllSortHistoriesByAlgorithmId(int id)
    {
        var result = sortHistoryRepository.GetByAlgorithmId(id);
        return result;
    }
}
