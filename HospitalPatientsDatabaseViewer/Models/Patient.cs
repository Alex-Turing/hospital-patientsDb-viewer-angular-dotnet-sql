using System;
using System.Collections.Generic;

namespace HospitalPatientsDatabaseViewer.Models;

public partial class Patient
{
    public int PatientId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Gender { get; set; }

    public DateTime? BirthDate { get; set; }

    public string? StreetAddress { get; set; }

    public string? City { get; set; }

    public string? ProvinceId { get; set; }

    public string? PostalCode { get; set; }

    public string? Email { get; set; }

    public string? HealthCardNum { get; set; }

    public string? Allergies { get; set; }

    public decimal? PatientHeight { get; set; }

    public decimal? PatientWeight { get; set; }
}
