using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Models.Dto;
using backend.Repositories.Interfaces;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SortHistoryController : ControllerBase
{
    private readonly ISortHistoryRepository sortHistoryRepository;

    public SortHistoryController(ISortHistoryRepository sortHistoryRepository)
    {
        this.sortHistoryRepository = sortHistoryRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllSortHistoryAsync()
    {
        IEnumerable<SortHistory> result = await sortHistoryRepository.GetAllAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetAllSortHistoriesByAlgorithmIdAsync(int id)
    {
        var result = await sortHistoryRepository.GetByAlgorithmId(id);
        if (result == null) return NotFound();
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> SubmitSortHistoryAsync([FromBody] SortHistoryDto sortHistoryDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        try
        {
            SortHistory sortHistory = new SortHistory(/* sortHistoryDto.Array */) // TODO Here it is. Should it require array as a parameter?
            {
                AlgorithmId = sortHistoryDto.AlgorithmId,
                SortStarted = sortHistoryDto.SortStarted,
                SortEnded = sortHistoryDto.SortEnded,
                ArraySize = sortHistoryDto.ArraySize,
                TimesCompared = sortHistoryDto.TimesCompared,
                ArrayAccesses = sortHistoryDto.ArrayAccesses,
                WasCancelled = sortHistoryDto.WasCancelled,
            };

            var objectInserted = await sortHistoryRepository.AddAsync(sortHistory);

            return Ok(sortHistory);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.InnerException);
        }
    }
}
