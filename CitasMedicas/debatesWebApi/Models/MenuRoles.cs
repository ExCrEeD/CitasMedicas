using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CitasMedicasWebApi.Models
{
    public class MenuRoles
    {
        [Key]
        public int Id { get; set; }
        public String Rol { get; set; }
        public  bool AgendarCita { get; set; }
        public bool Report { get; set; }
        public bool ConsultarCita { get; set; }
        public bool UserInfo { get; set; }
        public bool RegisterUser { get; set; }

        public bool CrearCargo { get; set; }
        public bool DeleteAccount { get; set; }
        public MenuRoles(string rol)
        {
            this.Rol = rol;
            if (rol == "Admin")
            {
                this.RegisterUser = true;
                this.UserInfo = true;
                this.Report = true;
                this.CrearCargo = true;
            }
            if (rol == "Doctor")
            {
                this.ConsultarCita = true;
                this.UserInfo = true;
            }
            if (rol == "Paciente")
            {
                this.AgendarCita = true;
                this.ConsultarCita = true;
                this.UserInfo = true;
                this.DeleteAccount = true;
            }
        }
    }
}