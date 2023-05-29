using backend.Data;
using backend.Models;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories;

public class AlgorithmRepository : IAlgorithmRepository
{
    readonly MasterDbContext _masterDbContext;

    public AlgorithmRepository(MasterDbContext context) => _masterDbContext = context;


    public async Task<IEnumerable<Algorithm>> GetAllAsync() => await _masterDbContext.Algorithms!.ToListAsync();

    public async Task<Algorithm> GetByIdAsync(int id) => await _masterDbContext.Algorithms!.FirstOrDefaultAsync(x => x.AlgorithmId == id);

    public async Task<Algorithm> InsertAlgorithmAsync(Algorithm algorithm)
    {
        await _masterDbContext.Algorithms!.AddAsync(algorithm);
        await _masterDbContext.SaveChangesAsync();
        return algorithm;
    }

    public async Task<Algorithm> EditAlgorithmAsync(Algorithm algorithm)
    {
        _masterDbContext.Algorithms!.Update(algorithm);
        await _masterDbContext.SaveChangesAsync();
        return algorithm;
    }

    public async Task<Algorithm> DeleteAlgorithmAsync(int algorithmId)
    {
        Algorithm algorithmToRemove = await this.GetByIdAsync(algorithmId);
        _masterDbContext.Algorithms!.Remove(algorithmToRemove);
        await _masterDbContext.SaveChangesAsync();
        return algorithmToRemove;
    }
}
