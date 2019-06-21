using CitasMedicasWebApi.Context;
using CitasMedicasWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace debatesWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ReporteController : ApiController
    {
        DataStore db = new DataStore();
        public IEnumerable<User> GetTopDoctores(int idDoctor)
        {
            List<int> query = (from cita in db.cita
                         select cita).GroupBy(g => g.IdDoctor).OrderBy(o => o).Take(3).Select(s=>s.Key).ToList();

            foreach (var item in query)
            {
                yield return new User
                {
                    Name = (from user in db.Users where user.Id == item select user).FirstOrDefault().Name
                };
            }
        }
        public IEnumerable<User> GetTopPacientes(int idDoctor)
        {
            List<int> query = (from cita in db.cita
                               select cita).GroupBy(g => g.IdPaciente).OrderBy(o => o).Take(3).Select(s => s.Key).ToList();

            foreach (var item in query)
            {
                yield return new User
                {
                    Name = (from user in db.Users where user.Id == item select user).FirstOrDefault().Name
                };
            }
        }
        public IEnumerable<DoctorCargos> GetTopCargos(int idDoctor)
        {
            List<int> query = (from cita in db.cita
                               select cita).GroupBy(g => g.IdDoctor).OrderBy(o => o).Take(3).Select(s => s.Key).ToList();

            foreach (var item in query)
            {
                int idCargo = (from user in db.Users where user.Id == item select user).FirstOrDefault().Cargo;
                yield return new DoctorCargos
                {
                    Descripcion = (from cargo in db.DoctorCargos where cargo.IdCargo == idCargo select cargo).FirstOrDefault().Descripcion
                };
            }
        }
    }
}
