using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace debatesWebApi.Models
{
    public class Cita
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public int IdPaciente { get; set; }
        public int IdDoctor { get; set; }
        public bool CitaFinalizada { get; set; }
        public string Descripcion { get; set; }
    }
}
