const AbstractSeeder = require("./AbstractSeeder");
const AdminSeeder = require("./AdminSeeder");
const ModeratorSeeder = require("./ModeratorSeeder");
const UserSeeder = require("./UserSeeder");

class CompteSeeder extends AbstractSeeder {
    constructor(){
        super({ table: "compte", truncate: true, dependencies: [AdminSeeder, ModeratorSeeder, UserSeeder] });
    }
    
    run() {
        const comptes = [
            {
                role: "admin",
                adminID: this.getRef("admin_admin1").insertId,
                user_dataID: null,
                moderatorID: null,
            },
            {
                role: "moderator",
                adminID: null,
                user_dataID: null,
                moderatorID: this.getRef("moderator_moderator1").insertId,
            },
            {
                role: "user",
                adminID: null,
                user_dataID: this.getRef("user_data_jperrin").insertId,
                moderatorID: null,
            },
        ];
        
        comptes.forEach((compte) => {
            const operationVideoWithRefName = {
                ...compte,
                refName: `compte_${compte.role}`,
              };

            this.insert(operationVideoWithRefName);
        });
    }
}

module.exports = CompteSeeder;