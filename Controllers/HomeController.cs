using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using NavinM_Mission5.Models;

namespace NavinM_Mission5.Controllers
{
    public class HomeController : Controller
    {
                //IActionResult is a created class
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator()
        {
            //Write our code here

            return View();
        }
    }
}
