using src.Models.Repositories;

namespace src.Models.DataManager;

public class SortHistoryManager : IDataRepository<SortHistory>
{
    readonly MasterDbContext _masterDbContext;
}