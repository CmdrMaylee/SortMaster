using src.Models;

namespace src.Repositories.Interfaces;

public interface IAlgorithmRepository
{
    Task<IEnumerable<Algorithm>> GetAllAsync();

    Task<Algorithm> InsertAlgorithm(Algorithm algorithm);
}
