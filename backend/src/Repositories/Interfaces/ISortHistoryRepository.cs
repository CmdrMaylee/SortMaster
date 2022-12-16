using System.Linq.Expressions;
using src.Models;

namespace src.Repositories.Interfaces;

public interface ISortHistoryRepository
{
    public SortHistory Get(Guid id);

    public IEnumerable<SortHistory> GetByAlgorithmId(int id);

    public Task<IEnumerable<SortHistory>> GetAllAsync(Expression<Func<SortHistory, bool>> predicate);

    public Task<SortHistory> AddAsync(SortHistory sortHistory);

    public void Update(SortHistory replace, SortHistory replacer);

    public void Delete(SortHistory sortHistory);
}
