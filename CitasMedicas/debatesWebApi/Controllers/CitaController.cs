using CitasMedicasWebApi.Context;
using CitasMedicasWebApi.Models;
using debatesWebApi.DTO;
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

        public IEnumerable<DTOCita> getCitaDoctor(int idDoctor)
        {
            var query = from cita in db.cita
                        where cita.IdDoctor == idDoctor && !cita.CitaFinalizada
                        select new DTOCita
                        {
                            IdCita = cita.Id,
                            Area = (from user in db.Users
                                    where user.Id == cita.IdDoctor
                                    join cargo in db.DoctorCargos on user.Cargo equals cargo.IdCargo
                                    select cargo).FirstOrDefault().Descripcion,
                            NombreDoctor = (from user in db.Users where user.Id == cita.IdDoctor select user).FirstOrDefault().Name,
                            NombrePaciente = (from user in db.Users where user.Id == cita.IdPaciente select user).FirstOrDefault().Name,
                            Fecha = cita.Fecha,
                            Hora = cita.Hora,
                            ValorCita = (from user in db.Users
                                         where user.Id == cita.IdDoctor
                                         join cargo in db.DoctorCargos on user.Cargo equals cargo.IdCargo
                                         select cargo).FirstOrDefault().ValorHora
                        };
            return query.ToList();
        }

        public IEnumerable<DTOCita> getCitaPaciente(int idPaciente)
        {
            var query = from cita in db.cita
                        where cita.IdPaciente == idPaciente && !cita.CitaFinalizada
                        select new DTOCita
                        {
                            IdCita = cita.Id,
                            Area = (from user in db.Users
                                    where user.Id == cita.IdDoctor
                                    join cargo in db.DoctorCargos on user.Cargo equals cargo.IdCargo
                                    select cargo).FirstOrDefault().Descripcion,
                            NombreDoctor = (from user in db.Users where user.Id == cita.IdDoctor select user).FirstOrDefault().Name,
                            NombrePaciente = (from user in db.Users where user.Id == cita.IdPaciente select user).FirstOrDefault().Name,
                            Fecha = cita.Fecha,
                            Hora = cita.Hora,
                            ValorCita = (from user in db.Users
                                         where user.Id == cita.IdDoctor
                                         join cargo in db.DoctorCargos on user.Cargo equals cargo.IdCargo
                                         select cargo).FirstOrDefault().ValorHora
                        };
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

        public void getFinalizada(int idCita)
        {
            var cita = db.cita.Find(idCita);
            var cita2 = cita;
            cita2.CitaFinalizada = true;
            db.Entry(cita).CurrentValues.SetValues(cita2);
            db.SaveChanges();
        }
    }
}
