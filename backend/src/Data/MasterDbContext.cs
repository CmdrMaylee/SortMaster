using Microsoft.EntityFrameworkCore;
using src.Models;

namespace src.Data;

public class MasterDbContext : DbContext
{
    public DbSet<SortHistory>? SortHistories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlite();
    }
}
