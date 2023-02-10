using src.Models;

namespace src.Repositories.Interfaces;

public interface ISortHistoryRepository
{
    Task<SortHistory> GetById(Guid id);
    Task<IEnumerable<SortHistory>> GetByAlgorithmId(int id);
    Task<IEnumerable<SortHistory>> GetAllAsync();

    Task<SortHistory> AddAsync(SortHistory sortHistory);

    void Update(SortHistory replace, SortHistory replacer);

    void Delete(SortHistory sortHistory);
}
