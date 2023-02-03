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

    public async Task<SortHistory> GetById(Guid id)
    {
        SortHistory result = await _masterDbContext.SortHistories!.FindAsync(id) ?? new SortHistory(new int[] { });
        return result;
    }

    public async Task<IEnumerable<SortHistory>> GetByAlgorithmId(int id) => await _masterDbContext.SortHistories!.Where(x => x.AlgorithmId == id).ToListAsync();

    public async Task<IEnumerable<SortHistory>> GetAllAsync() => await _masterDbContext.SortHistories!.ToListAsync();

    public async Task<SortHistory> AddAsync(SortHistory sortHistory)
    {
        _masterDbContext.SortHistories!.Add(sortHistory);
        await _masterDbContext.SaveChangesAsync();
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
        _masterDbContext.SortHistories!.Remove(sortHistory);
        _masterDbContext.SaveChanges();
    }
}
