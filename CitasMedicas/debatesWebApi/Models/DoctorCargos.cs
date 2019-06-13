using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace debatesWebApi.Models
{
    public class DoctorCargos
    {
        [Key]
        public int IdCargo { get; set; }
        public string Descripcion { get; set; }
        public decimal ValorHora { get; set; }
    }
}