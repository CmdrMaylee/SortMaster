using Microsoft.EntityFrameworkCore;
using src.Models;

namespace src.Data;

public class MasterDbContext : DbContext
{
    public DbSet<SortHistory>? SortHistories { get; set; }
    public DbSet<Algorithm>? Algorithms { get; set; }

    public MasterDbContext(DbContextOptions<MasterDbContext> options) : base(options) => Database.EnsureCreated();

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite("Data Source=sqlitedb.db");
        // options.UseInMemoryDatabase("masterDb");
    }

    /* protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<SortHistory>().HasData
            (new SortHistory
            {
                AlgorithmId = 98,
                SortStarted = DateTime.Now.AddMinutes(-1),
                SortEnded = DateTime.Now,
                TimesCompared = 100,
                ArrayAccesses = 50,
            });
    } */
}
