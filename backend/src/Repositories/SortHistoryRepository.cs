using src.Data;
using src.Models;
using src.Repositories.Interfaces;

namespace src.Repositories;

public class SortHistoryRepository : ISortHistoryRepository
{
    readonly MasterDbContext _masterDbContext;

    public SortHistoryRepository(MasterDbContext context) => _masterDbContext = context;

    public SortHistory Get(int id) => _masterDbContext.SortHistories.FirstOrDefault(x => x.SortHistoryId == id);

    public IEnumerable<SortHistory> GetByAlgorithmId(int id) => _masterDbContext.SortHistories.Where(x => x.AlgorithmId == id);

    public IEnumerable<SortHistory> GetAll() => _masterDbContext.SortHistories.ToList();

    public void Add(SortHistory sortHistory)
    {
        _masterDbContext.SortHistories.Add(sortHistory);
        _masterDbContext.SaveChanges();
    }

    public void Update(SortHistory replace, SortHistory replacer)
    {
        replace.SortHistoryId = replacer.SortHistoryId;
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
