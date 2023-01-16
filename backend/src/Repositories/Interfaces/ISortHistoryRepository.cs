using System.Linq.Expressions;
using src.Models;

namespace src.Repositories.Interfaces;

public interface ISortHistoryRepository
{
    SortHistory Get(Guid id);
    IEnumerable<SortHistory> GetByAlgorithmId(int id);
    Task<IEnumerable<SortHistory>> GetAllAsync();

    Task<SortHistory> AddAsync(SortHistory sortHistory);

    void Update(SortHistory replace, SortHistory replacer);

    void Delete(SortHistory sortHistory);
}
