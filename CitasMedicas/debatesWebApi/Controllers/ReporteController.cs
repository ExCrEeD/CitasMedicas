using CitasMedicasWebApi.Context;
using CitasMedicasWebApi.Models;
using debatesWebApi.DTO;
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
        public IEnumerable<User> GetTopDoctores()

        {
            var query = (from cita in db.cita
                         select cita.IdDoctor).GroupBy(g => g).Select(group => new DTOReportCount { ID = group.FirstOrDefault() }).ToList();

            List<DTOReportCount> listresport = new List<DTOReportCount>();
             
            foreach (var item in query)

            {
                DTOReportCount tempItem = new DTOReportCount
                {
                    ID = item.ID,
                    Conteo = (from cita in db.cita where cita.IdDoctor == item.ID select cita).Count()
                };
                listresport.Add(tempItem);
            }

            foreach (var item in listresport.OrderByDescending(o => o.Conteo).Take(5))
            {
                yield return new User
                {
                    Name = (from user in db.Users where user.Id == item.ID select user).FirstOrDefault().Name
                };
            }
        }



        public IEnumerable<User> GetTopPacientes()
        {
            var query = (from cita in db.cita
                         select cita.IdPaciente).GroupBy(g => g).Select(group => new DTOReportCount { ID = group.FirstOrDefault() }).ToList();
            List<DTOReportCount> listresport = new List<DTOReportCount>();
            foreach (var item in query)
            {
                DTOReportCount tempItem = new DTOReportCount
                {
                    ID = item.ID,
                    Conteo = (from cita in db.cita where cita.IdPaciente == item.ID select cita).Count()
                };
                listresport.Add(tempItem);
            }
            foreach (var item in listresport.OrderByDescending(o => o.Conteo).Distinct().Take(5))
            {
                yield return new User
                {
                    Name = (from user in db.Users where user.Id == item.ID select user).FirstOrDefault().Name
                };
            }
        }
        public IEnumerable<DoctorCargos> GetTopCargos()
        {
            var query = (from cita in db.cita
                         select cita.IdDoctor).GroupBy(g => g).Select(group => new DTOReportCount { ID = group.FirstOrDefault() }).ToList();
            List<DTOReportCount> listresport = new List<DTOReportCount>();
            foreach (var item in query)
            {
                DTOReportCount tempItem = new DTOReportCount
                {
                    ID = item.ID,
                    Conteo = (from cita in db.cita where cita.IdDoctor == item.ID select cita).Count()
                };
                
                    listresport.Add(tempItem);
            }
            foreach (var item in listresport.OrderByDescending(o => o.Conteo).Distinct().Take(5))
            {
                int idCargo = (from usuarios in db.Users where usuarios.Id == item.ID select usuarios).FirstOrDefault().Cargo;

                yield return new DoctorCargos
                {
                    Descripcion = (from cargos in db.DoctorCargos where cargos.IdCargo == idCargo select cargos).FirstOrDefault().Descripcion,
                    ValorHora = (from cargos in db.DoctorCargos where cargos.IdCargo == idCargo select cargos).FirstOrDefault().ValorHora

                };
            }
        }
    }
}
