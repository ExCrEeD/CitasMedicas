using CitasMedicasWebApi.Context;
using CitasMedicasWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CitasMedicasWebApi.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CitaController : ApiController
    {
        DataStore db = new DataStore();

        public IEnumerable<Cita> getCitaDoctor(int idDoctor)
        {
            var query = from cita in db.cita
                        where cita.IdDoctor == idDoctor && !cita.CitaFinalizada
                        select cita;
            return query.ToList();
        }

        public IEnumerable<Cita> getCitaPaciente(int idPaciente)
        {
            var query = from cita in db.cita
                        where cita.IdPaciente == idPaciente && !cita.CitaFinalizada
                        select cita;
            return query.ToList();
        }

        public IEnumerable<User> getDoctoresPorIdCargo(int idCargo)
        {
            var query = from user in db.Users
                        where user.Cargo == idCargo && user.Rol == "Doctor"
                        select user;
            return query.ToList();
        }

        public IEnumerable<int> getHorasDisponiblesDoctor(int idDoctor, DateTime fecha)
        {
            var query = from cita in db.cita
                        where cita.IdDoctor == idDoctor && cita.Fecha.Equals(fecha)
                        select cita;
            List<int> listhoras = query.Select(s => s.Hora).ToList();
            List<int> horasDisponibles = new List<int>();
            for (int hora = 6; hora < 23; hora++)
            {
                if (!listhoras.Contains(hora))
                    horasDisponibles.Add(hora);
            }
            return horasDisponibles.OrderBy(w => w);
        }

        public void Post([FromBody]Cita cita)
        {
            db.cita.Add(cita);
            db.SaveChanges();
        }
    }
}
