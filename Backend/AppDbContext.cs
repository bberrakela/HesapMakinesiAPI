using HesapMakinesiApi.Models;
using Microsoft.EntityFrameworkCore;

namespace HesapMakinesiApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<IslemGecmisi> IslemGecmisi { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<IslemGecmisi>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Islem).HasMaxLength(10);
                entity.Property(e => e.Tarih).HasDefaultValueSql("GETDATE()");
            });
        }
    }
}
