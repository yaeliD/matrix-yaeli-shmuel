using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppM.Models
{
    public class DB
    {
        public static List<Company> Companies { get; set; }
        public static List<Customer> Customers { get; set; }
        public static List<Employee> Employees { get; set; }
        static DB()
        {
            Companies = new List<Company>()
            {
                new Company(){Name="Matrix"},
                new Company(){Name="Abra"},
                new Company(){Name="Partner"}
            };
            Customers = new List<Customer>()
            {
                new Customer(){Num=50,NameCompany="Matrix"},
                new Customer(){Num=100,NameCompany="Abra"},
                new Customer(){Num=30,NameCompany="Partner"}
            };

            Employees = new List<Employee>()
            {
                new Employee(){Num=20,NameCompany="Matrix"},
                new Employee(){Num=70,NameCompany="Abra"},
                new Employee(){Num=10,NameCompany="Partner"}            
            };
        }
    }
}