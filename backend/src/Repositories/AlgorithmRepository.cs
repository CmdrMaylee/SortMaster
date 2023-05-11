using src.Data;
using src.Models;
using src.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace src.Repositories;

public class AlgorithmRepository : IAlgorithmRepository
{
    readonly MasterDbContext _masterDbContext;

    public AlgorithmRepository(MasterDbContext context) => _masterDbContext = context;


    public async Task<IEnumerable<Algorithm>> GetAllAsync() => await _masterDbContext.Algorithms!.ToListAsync();

    public async Task<Algorithm> GetById(int id) => await _masterDbContext.Algorithms!.FirstOrDefaultAsync(x => x.AlgorithmId == id);

    public async Task<Algorithm> InsertAlgorithm(Algorithm algorithm)
    {
        await _masterDbContext.Algorithms!.AddAsync(algorithm);
        await _masterDbContext.SaveChangesAsync();
        return algorithm;
    }
}
