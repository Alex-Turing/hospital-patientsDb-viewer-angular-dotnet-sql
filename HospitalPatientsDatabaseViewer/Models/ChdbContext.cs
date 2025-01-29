using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HospitalPatientsDatabaseViewer.Models;

public partial class ChdbContext : DbContext
{
    public ChdbContext()
    {
    }

    public ChdbContext(DbContextOptions<ChdbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Patient> Patients { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("name=chdb");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Patient>(entity =>
        {
            entity.HasKey(e => e.PatientId).HasName("PK__patients__4D5CE476D6EED2C9");

            entity.ToTable("patients");

            entity.Property(e => e.PatientId).HasColumnName("patient_id");
            entity.Property(e => e.Allergies)
                .HasMaxLength(80)
                .IsUnicode(false)
                .HasColumnName("allergies");
            entity.Property(e => e.BirthDate)
                .HasColumnType("date")
                .HasColumnName("birth_date");
            entity.Property(e => e.City)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("city");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("first_name");
            entity.Property(e => e.Gender)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("gender");
            entity.Property(e => e.HealthCardNum)
                .HasMaxLength(12)
                .IsUnicode(false)
                .HasColumnName("health_card_num");
            entity.Property(e => e.LastName)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("last_name");
            entity.Property(e => e.PatientHeight)
                .HasColumnType("decimal(3, 0)")
                .HasColumnName("patient_height");
            entity.Property(e => e.PatientWeight)
                .HasColumnType("decimal(4, 0)")
                .HasColumnName("patient_weight");
            entity.Property(e => e.PostalCode)
                .HasMaxLength(7)
                .IsUnicode(false)
                .HasColumnName("postal_code");
            entity.Property(e => e.ProvinceId)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("province_id");
            entity.Property(e => e.StreetAddress)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("street_address");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
