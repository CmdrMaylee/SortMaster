using src.Models;
using Microsoft.EntityFrameworkCore;

namespace src.Data;

public class MasterDbSeedStuff
{
    public static async Task SeedAsync(IServiceProvider serviceProvider)
    {
        using (var context = new MasterDbContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<MasterDbContext>>()
        ))

            await context.SortHistories.AddAsync(new SortHistory()
            {
                Id = new Guid("00000000-0000-0000-0000-000000000000"),
                AlgorithmId = 1,
                ArrayAccesses = 1000,
                TimesCompared = 5000,
                SortStarted = DateTime.Now.AddSeconds(-10),
                SortEnded = DateTime.Now
            });
    }
}