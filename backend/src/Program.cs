using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using backend.Repositories;
using backend.Repositories.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<MasterDbContext>();
builder.Services.AddScoped<ISortHistoryRepository, SortHistoryRepository>();
builder.Services.AddScoped<IAlgorithmRepository, AlgorithmRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5173").AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowOrigin");

app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    // await MasterDbSeedStuff.SeedAsync(services);
}


app.Run();
