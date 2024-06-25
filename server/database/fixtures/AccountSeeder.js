const AbstractSeeder = require("./AbstractSeeder");
const AdminSeeder = require("./AdminSeeder");
const ModeratorSeeder = require("./ModeratorSeeder");
const UserSeeder = require("./UserSeeder");

class AccountSeeder extends AbstractSeeder {
    constructor(){
        super({ table: "compte", truncate: true, dependencies: [AdminSeeder, ModeratorSeeder, UserSeeder] });
    }
    
    run() {
        const accounts = [
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
        
        accounts.forEach((account) => {
            const accountWithRefName = {
                ...account,
                refName: `compte_${account.role}`,
              };

            this.insert(accountWithRefName);
        });
    }
}

module.exports = AccountSeeder;