using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using src.Models;
using src.Repositories;
using src.Repositories.Interfaces;
using src.Models.Dto;

namespace src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AlgorithmController : ControllerBase
{
    private readonly IAlgorithmRepository algorithmRepository;

    public AlgorithmController(IAlgorithmRepository algorithmRepository)
    {
        this.algorithmRepository = algorithmRepository;
    }

    [HttpGet("GetAllSortingAlgorithms")]
    public async Task<IActionResult> GetAllAlgorithmsAsync()
    {
        IEnumerable<Algorithm> result = await algorithmRepository.GetAllAsync();
        return Ok(result);
    }

    [HttpPost("InsertAlgorithm")]
    public async Task<IActionResult> InsertAlgorithmAsync([FromBody] AlgorithmDto algorithmDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        try
        {
            Algorithm algorithm = new Algorithm()
            {
                AlgorithmName = algorithmDto.AlgorithmName,
                BigONotationBest = algorithmDto.BigONotationBest,
                BigONotationWorst = algorithmDto.BigONotationWorst,
                BigONotationAverage = algorithmDto.BigONotationAverage,
                DescriptionText = algorithmDto.DescriptionText,
                PerformanceText = algorithmDto.PerformanceText
            };

            await algorithmRepository.InsertAlgorithm(algorithm);

            return Ok(algorithm);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }
}
