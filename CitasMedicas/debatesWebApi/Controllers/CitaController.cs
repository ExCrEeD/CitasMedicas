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
            for (int hora = 6; hora < 23; hora++)
            {
                if (!listhoras.Contains(hora))
                    listhoras.Add(hora);
            }
            return listhoras.OrderBy(w => w);
        }
    }
}
