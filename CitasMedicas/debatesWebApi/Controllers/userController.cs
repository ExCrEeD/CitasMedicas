using debatesWebApi.Context;
using debatesWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Net.Http.Headers;

namespace debatesWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]



    public class userController : ApiController
    {
        DataStore db = new DataStore();
        // GET api/user
        public User GetLogin([FromUri]User logincredentials)
        {
            var query = from a in db.Users
                       where a.Email == logincredentials.Email
                       select a;
            User user;
            if (query.Count() == 0)
            {
                user= null;
            }
            else
            {
                user = query.First();
                if (user.Password != logincredentials.Password)
                {
                    user = null; 
                }
            }
            return user;
        }

        public MenuRoles getRolMenu(string rol)
        {
            var query = from a in db.MenuRoles
                        where a.Rol.ToUpper() == rol.ToUpper()
                        select a;
            return query.First();
        }

        public void GetSetup()
        {
            var query = from a in db.Users
                        select a;
            if (query.Count() == 0)
            {
                User user = new User();
                user.Name = "Admin";
                user.Email = "admin@citas";
                user.Password = "Admin123*";
                user.Rol = "Admin";
                db.Users.Add(user);
                db.SaveChanges();
            }

            var query2 = from a in db.MenuRoles
                         select a;
            if (query2.Count() == 0)
            {
                MenuRoles userAdmin = new MenuRoles("Admin");
                db.MenuRoles.Add(userAdmin);
                MenuRoles userDoctor = new MenuRoles("Doctor");
                db.MenuRoles.Add(userDoctor);
                MenuRoles userPaciente = new MenuRoles("Paciente");
                db.MenuRoles.Add(userPaciente);
                db.SaveChanges();
            }
        }
     
        // POST api/user
        public void Post([FromBody]User usuario)
        {
            db.Users.Add(usuario);
            db.SaveChanges();
        }


        // PUT api/user
        public void Put(int id, [FromBody]string value)
        {
        }

        //// DELETE api/user
        public Response Delete(int id, string password)
        {
            string mensaje = "";
            var usr = db.Users.Find(id);
            if (usr.Password == password)
                mensaje = "usuario borrado correctamente";
            else
                mensaje = "Contraseña incorrecta";

            return new Response
            {
                Message = mensaje
            };
        }
    }
}
