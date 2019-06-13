using debatesWebApi.Context;
using debatesWebApi.Models;
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
    public class DoctorCargoController : ApiController
    {
        // POST api/user
        DataStore db = new DataStore();
        public void Post([FromBody]DoctorCargos cargo)
        {
            db.DoctorCargos.Add(cargo);
            db.SaveChanges();
        }

       
        public IEnumerable<DoctorCargos> getCargos()
        {
            var query = from DoctorCargos in db.DoctorCargos
                        select DoctorCargos;
            return query.ToList();

        }

        public void deleteCargo(int id )
        {
            var query = db.DoctorCargos.Find(id);
            db.DoctorCargos.Remove(query);
            db.SaveChanges();
        }
    
    }
}
