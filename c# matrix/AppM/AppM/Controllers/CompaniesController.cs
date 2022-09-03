using AppM.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AppM.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    [RoutePrefix("api/Companies")]
    public class CompaniesController : ApiController
    {
        // POST: api/Companies
        [HttpPost]
        [Route("postCompanies")]
        public IHttpActionResult PostCompanies()
        {
            string token = Request.Headers.GetValues("token").First();
            if (token != "1234")
            {
                return Ok("the token not found");
            }
            return Ok(DB.Companies); 
        }

        [HttpPost]
        [Route("postEmployees")]
        public IHttpActionResult postEmployees()
        {
            string token = Request.Headers.GetValues("token").First();
            if (token != "1234")
            {
                return Ok("the token not found");
            }
            return Ok(DB.Employees);
        }

        [HttpPost]
        [Route("postCustomers")]
        public IHttpActionResult PostCustomers()
        {
            string token = Request.Headers.GetValues("token").First();
            if (token != "1234")
            {
                return Ok("the token not found");
            }
            return Ok(DB.Customers);
        }

    }
}
