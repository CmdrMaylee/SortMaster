using System.Linq;
using System.Linq.Expressions;
using src.Data;
using src.Models;
using src.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace src.Repositories;

public class AlgorithmRepository : IAlgorithmRepository
{
    readonly MasterDbContext _masterDbContext;

    public AlgorithmRepository(MasterDbContext context) => _masterDbContext = context;

    public async Task<IEnumerable<Algorithm>> GetAllAsync() => await _masterDbContext.AlgorithmRepo!.ToListAsync();
}
