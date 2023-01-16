using System.Linq;
using System.Linq.Expressions;
using src.Data;
using src.Models;
using src.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace src.Repositories;

public class SortHistoryRepository : ISortHistoryRepository
{
    readonly MasterDbContext _masterDbContext;

    public SortHistoryRepository(MasterDbContext context) => _masterDbContext = context;

    public SortHistory Get(Guid id) => _masterDbContext.SortHistories.FirstOrDefault(x => x.Id == id);

    public IEnumerable<SortHistory> GetByAlgorithmId(int id) => _masterDbContext.SortHistories.Where(x => x.AlgorithmId == id);

    public async Task<IEnumerable<SortHistory>> GetAllAsync() => await _masterDbContext.SortHistories.ToListAsync();

    public async Task<SortHistory> AddAsync(SortHistory sortHistory)
    {
        _masterDbContext.SortHistories.Add(sortHistory);
        _masterDbContext.SaveChanges();
        return sortHistory;
    }

    public void Update(SortHistory replace, SortHistory replacer)
    {
        replace.Id = replacer.Id;
        replace.AlgorithmId = replacer.AlgorithmId;
        replace.SortStarted = replacer.SortStarted;
        replace.SortEnded = replacer.SortEnded;
        replace.ArrayAccesses = replacer.ArrayAccesses;
        replace.TimesCompared = replacer.TimesCompared;
        replace.WasCancelled = replacer.WasCancelled;

        _masterDbContext.SaveChanges();
    }

    public void Delete(SortHistory sortHistory)
    {
        _masterDbContext.SortHistories.Remove(sortHistory);
        _masterDbContext.SaveChanges();
    }
}
