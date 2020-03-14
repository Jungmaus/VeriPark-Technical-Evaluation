using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using VeriPark_Technical_Evaluation.Entity.Entity;
using VeriPark_Technical_Evaluation.Entity.Mapping;

namespace VeriPark_Technical_Evaluation.Entity.Context
{
    public class MsSQLContext : DbContext
    {
        public MsSQLContext(DbContextOptions<MsSQLContext> dbContextOptions) : base(dbContextOptions) { }

        public DbSet<Announcement> Announcement { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AnnouncementMap());
        }

    }
}
