using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VeriPark_Technical_Evaluation.Entity.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Announcement",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(maxLength: 25, nullable: false),
                    Description = table.Column<string>(maxLength: 125, nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    AnnouncementType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Announcement", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Announcement_ID",
                table: "Announcement",
                column: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Announcement");
        }
    }
}
