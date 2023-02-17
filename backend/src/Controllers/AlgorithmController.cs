using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using src.Models;
using src.Repositories;
using src.Repositories.Interfaces;

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
    public IActionResult GetAllAlgorithmsAsync()
    {
        var result = algorithmRepository.GetAllAsync();
        return Ok(result);
    }
}
