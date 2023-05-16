using src.Models;

namespace src.Repositories.Interfaces;

public interface IAlgorithmRepository
{
    Task<IEnumerable<Algorithm>> GetAllAsync();

    Task<Algorithm> GetByIdAsync(int id);

    Task<Algorithm> InsertAlgorithmAsync(Algorithm algorithm);

    Task<Algorithm> EditAlgorithmAsync(Algorithm algorithm);

    Task<Algorithm> DeleteAlgorithmAsync(int algorithmId);
}
