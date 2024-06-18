using Microsoft.EntityFrameworkCore;

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AMS3ASales.API.Migrations
{
    /// <inheritdoc />
    public partial class SeedCategory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Insert into Category(Id,Description,IsActive,ImageURL) Values('cb0d7c74-ffed-4670-b82d-c7d798fe6712','Bebidas',1,'bebidas.jpg')");
            migrationBuilder.Sql("Insert into Category(Id,Description,IsActive,ImageURL) Values('c9ff1e5b-a038-4e7c-b3e1-59554e8bbeec','Pizzas',1,'pizzas.jpg')");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Drop Table Category");
        }
    }
}
