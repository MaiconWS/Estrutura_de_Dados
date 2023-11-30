using GranTiete_Devs.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GranTiete_Devs.Data;

public class AppDbContext : IdentityDbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) :
        base(options)
    {
    }

    public DbSet<AreaAtuacao> AreaAtuacoes { get; set; }
    public DbSet<Usuario> Usuarios { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        #region Popular Areas de Atuação
        List<AreaAtuacao> areas = new()
        {
            new() {
                Id = 1,
                Nome = "Desenvolvedor FullStack"
            },
            new() {
                Id = 2,
                Nome = "Desenvolvedor BackEnd"
            },
            new() {
                Id = 3,
                Nome = "Desenvolvedor FrontEnd"
            }
        };
        builder.Entity<AreaAtuacao>().HasData(areas);
        #endregion

        #region Popular Perfis de Usuario
        List<IdentityRole> roles = new()
        {
            new() {
                Id = Guid.NewGuid().ToString(),
                Name = "Administrador",
                NormalizedName = "ADMINISTRADOR"
            },
            new() {
                Id = Guid.NewGuid().ToString(),
                Name = "Moderador",
                NormalizedName = "MODERADOR"
            },
            new() {
                Id = Guid.NewGuid().ToString(),
                Name = "Usuário",
                NormalizedName = "USUÁRIO"
            }
        };
        builder.Entity<IdentityRole>().HasData(roles);
        #endregion

        #region Popular Usuario
        List<IdentityUser> users = new()
        {
            new() {
                Id = Guid.NewGuid().ToString(),
                UserName = "Admin",
                NormalizedUserName = "ADMIN",
                Email = "admin@grantiete.com.br",
                NormalizedEmail = "ADMIN@GRANTIETE.COM.BR",
                EmailConfirmed = true,
                LockoutEnabled = true,
                PhoneNumber = "14998288363",
                PhoneNumberConfirmed = true
            }
        };
        foreach (var user in users)
        {
            PasswordHasher<IdentityUser> pass = new();
            user.PasswordHash = pass.HashPassword(user, "@Gran123");
        }
        builder.Entity<IdentityUser>().HasData(users);

        List<Usuario> usuarios = new()
        {
            new() {
                UsuarioId = users[0].Id,
                Nome = "Maicon Willian dos Santos",
                DataNascimento = DateTime.Parse("13/09/2002"),
                AreaAtuacaoId = 1,
                FotoPerfil = "/img/usuarios/avatar.png"
            }
        };
        builder.Entity<Usuario>().HasData(usuarios);

        List<IdentityUserRole<string>> userRoles = new()
        {
            new() {
                UserId = users[0].Id, 
                RoleId = roles[0].Id
            },
            new() {
                UserId = users[0].Id, 
                RoleId = roles[1].Id
            },
            new() {
                UserId = users[0].Id, 
                RoleId = roles[2].Id
            }
        };
        builder.Entity<IdentityUserRole<string>>().HasData(userRoles);
        #endregion

    }
}