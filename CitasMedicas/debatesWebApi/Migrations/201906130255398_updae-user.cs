namespace debatesWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updaeuser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "Cargo", c => c.String());
            DropColumn("dbo.DoctorCargos", "IdDoctor");
        }
        
        public override void Down()
        {
            AddColumn("dbo.DoctorCargos", "IdDoctor", c => c.Int(nullable: false));
            DropColumn("dbo.User", "Cargo");
        }
    }
}
