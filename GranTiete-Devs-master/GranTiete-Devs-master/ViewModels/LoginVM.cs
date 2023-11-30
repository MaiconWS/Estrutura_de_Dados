using System.ComponentModel.DataAnnotations;

namespace GranTiete_Devs.ViewModels;

public class LoginVM
{
    [Display(Name ="Informe seu Email ou Nome de Usuario")]
    [Required(ErrorMessage = "Por Favor, informe seu Email ou Nome de Usuario")]
    [StringLength(100, ErrorMessage ="O Email deve conter no maixmo 100 caracteris")]
    public string Email { get; set;}

    [Display(Name ="Senha")]
    [DataType(DataType.Password)]
    [Required(ErrorMessage = "Por Favor, informe sua senha")]
    [StringLength(100, ErrorMessage ="O Email deve conter no maixmo 30 caracteris")]
    public string Senha { get; set;}

    [Display(Name = "Manter conectado ?")]
    public bool Lembrar { get; set;} = false;

    
    public string UrlRetorno { get; set;}
}