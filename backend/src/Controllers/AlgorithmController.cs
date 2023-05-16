using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using src.Models;
using src.Repositories;
using src.Repositories.Interfaces;
using src.Models.Dto;

namespace src.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AlgorithmsController : ControllerBase
{
    private readonly IAlgorithmRepository algorithmRepository;

    public AlgorithmsController(IAlgorithmRepository algorithmRepository)
    {
        this.algorithmRepository = algorithmRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllAlgorithmsAsync()
    {
        IEnumerable<Algorithm> result = await algorithmRepository.GetAllAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        try
        {
            var result = await algorithmRepository.GetByIdAsync(id);
            if (result == null) return NotFound(result);
            return Ok(result);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpPost]
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

            await algorithmRepository.InsertAlgorithmAsync(algorithm);

            return Ok(algorithm);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditAlgorithmAsync([FromBody] AlgorithmDto algorithmDto, int id)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        try
        {
            if (await algorithmRepository.GetByIdAsync(id) == null) return NotFound("Nonexistent algorithm with that Id.");

            Algorithm algorithm = await algorithmRepository.GetByIdAsync(id);

            algorithm.AlgorithmName = algorithmDto.AlgorithmName ?? algorithm.AlgorithmName;
            algorithm.DescriptionText = algorithmDto.DescriptionText ?? algorithm.DescriptionText;
            algorithm.PerformanceText = algorithmDto.PerformanceText ?? algorithm.PerformanceText;
            algorithm.BigONotationAverage = algorithmDto.BigONotationAverage ?? algorithm.BigONotationAverage;
            algorithm.BigONotationBest = algorithmDto.BigONotationBest ?? algorithm.BigONotationBest;
            algorithm.BigONotationWorst = algorithmDto.BigONotationWorst ?? algorithm.BigONotationWorst;

            await algorithmRepository.EditAlgorithmAsync(algorithm);

            return Ok(algorithm);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAlgorithmByIdAsync(int id)
    {
        try
        {
            if (await algorithmRepository.GetByIdAsync(id) == null) return NotFound("Nonexistent algorithm with that Id.");
            var result = await algorithmRepository.DeleteAlgorithmAsync(id);

            return Ok(result);
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }
}
