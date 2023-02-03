using src.Data;
using src.Models;
using Microsoft.EntityFrameworkCore;
using src.Repositories;
using src.Repositories.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<MasterDbContext>();
builder.Services.AddScoped<ISortHistoryRepository, SortHistoryRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    // await MasterDbSeedStuff.SeedAsync(services);
}


app.Run();
