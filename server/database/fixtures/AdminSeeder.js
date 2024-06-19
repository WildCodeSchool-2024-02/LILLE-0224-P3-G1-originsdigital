const AbstractSeeder = require("./AbstractSeeder");

class AdminSeeder extends AbstractSeeder {
    constructor(){
        super({ table :"admin", truncate :true});
    }
    
    run() {
        const admins = [
            {
                username: 'admin1',
                password: 'password123'
            },
            {
                username: 'admin2',
                password: 'password123'
            },
        ];
        
        admins.forEach((admin) => {
            this.insert(admin);
        });
    }
}



module.exports = AdminSeeder;