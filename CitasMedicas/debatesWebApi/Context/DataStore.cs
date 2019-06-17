using CitasMedicasWebApi.Models;
using System;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace CitasMedicasWebApi.Context
{
    public class DataStore:DbContext
    {
        public DataStore() : base("DataStore") {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<DataStore, Migrations.Configuration>());
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Properties<DateTime>()
           .Configure(c => c.HasColumnType("datetime2"));
        }
        public DbSet<User> Users { get; set; }
        public DbSet<MenuRoles> MenuRoles { get; set;}
        public DbSet<Cita> cita { get; set;}
        public DbSet<DoctorCargos> DoctorCargos { get; set; }
    }
}