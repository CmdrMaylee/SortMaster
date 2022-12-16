using src.Models;

namespace src.Repositories.Interfaces;

public interface ISortHistoryRepository
{
    public SortHistory Get(int id);

    public IEnumerable<SortHistory> GetByAlgorithmId(int id);

    public IEnumerable<SortHistory> GetAll();

    public void Add(SortHistory sortHistory);

    public void Update(SortHistory replace, SortHistory replacer);

    public void Delete(SortHistory sortHistory);
}