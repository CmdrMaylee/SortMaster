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

    [HttpGet("GetSortingAlgorithmById/{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        try
        {
            var result = await algorithmRepository.GetById(id);
            if (result == null) return NotFound(result);
            return Ok(result);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
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
                AlgorithmName = algorithmDto.AlgorithmName, //TODO Is there a better way to work around the null possibility?
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
