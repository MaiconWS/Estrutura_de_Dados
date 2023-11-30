using GranTiete_Devs.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace GranTiete_Devs.Controllers;

public class AccountController : Controller
{
    private readonly ILogger<AccountController> _logger;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;


    public AccountController(
        ILogger<AccountController> logger,
        SignInManager<IdentityUser> signInManager,
        UserManager<IdentityUser> userManager)
    {
        _logger = logger;
        _signInManager = signInManager;
        _userManager = userManager;

    }

    public SignInManager<IdentityUser> SignInManager { get; }


    [HttpGet]
    [ValidateAntiForgeryToken]
    public IActionResult Login(string returnUrl)
    {
        LoginVM login = new(){
            UrlRetorno = returnUrl ?? Url.Content("~/")
        };
        return View(login);
    }

    [HttpPost]
    public IActionResult Login(LoginVM login)
    {
       if(ModelState.IsValid)
       {
        
       }
        return View(login);
    }

}
