using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace debatesWebApi.DTO
{
    public class DTOCita
    {

        public int IdCita { get; set; }
        public string Area { get; set; }
        public string NombreDoctor { get; set; }
        public string NombrePaciente { get; set; }
        public DateTime Fecha { get; set; }
        public int Hora { get; set; }
        public decimal ValorCita   { get; set; }

    }
}