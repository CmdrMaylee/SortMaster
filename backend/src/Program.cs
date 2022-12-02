using src.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


// TEST THINGS
{
    using var db = new MasterDbContext();
    db.Add(new SortHistory()
    {
        AlgorithmId = -98,
        SortStarted = DateTime.Now.AddMinutes(-1),
        SortEnded = DateTime.Now,
        TimesCompared = 100,
        ArrayAccesses = 50
    });
    db.SaveChanges();
}


app.Run();
