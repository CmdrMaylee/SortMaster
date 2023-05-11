using src.Models;

namespace src.Repositories.Interfaces;

public interface IAlgorithmRepository
{
    Task<IEnumerable<Algorithm>> GetAllAsync();

    Task<Algorithm> GetById(int id);

    Task<Algorithm> InsertAlgorithm(Algorithm algorithm);
}
