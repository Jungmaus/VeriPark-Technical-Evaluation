using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using VeriPark_Technical_Evaluation.Entity.Entity;

namespace VeriPark_Technical_Evaluation.Entity.Mapping
{
    public class AnnouncementMap : IEntityTypeConfiguration<Announcement>
    {
        public void Configure(EntityTypeBuilder<Announcement> builder)
        {
            builder.HasKey(x => x.ID);
            builder.Property(x => x.AnnouncementType).IsRequired();
            builder.Property(x => x.Date).IsRequired();
            builder.Property(x => x.Description).HasMaxLength(125).IsRequired();
            builder.Property(x => x.Title).HasMaxLength(25).IsRequired();

            builder.HasIndex(x => x.ID);
        }
    }
}
