using src.Models;

namespace src.Data;

public class SeedData
{
    public static void SeedDb(MasterDbContext context)
    {
        context.Database.EnsureCreated();
        if (context.SortHistories.Any()) return;

        context.SortHistories.Add(new SortHistory()
        {
            AlgorithmId = -98,
            SortHistoryId = 1,
            SortStarted = DateTime.Now.AddMinutes(-1),
            SortEnded = DateTime.Now,
            TimesCompared = 100,
            ArrayAccesses = 50,
        });

    }
}

