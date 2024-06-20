const AbstractSeeder = require("./AbstractSeeder");
const ModeratorSeeder = require("./ModeratorSeeder");
const CompteSeeder = require("./CompteSeeder");

class OperationModerationSeeder extends AbstractSeeder {
    constructor(){
        super({ table: "operation_moderation", truncate: true, dependencies: [CompteSeeder, ModeratorSeeder] });
    }
    
    run() {
        const operationModeration = [
            {
                operationType: "create",
                moderatorID: this.getRef("moderator_moderator2").insertId,
                compteID: this.getRef("compte_moderator").insertId,
            },
            {
                operationType: "modify",
                moderatorID: this.getRef("moderator_moderator2").insertId,
                compteID: this.getRef("compte_moderator").insertId,
            },
            {
                operationType: "erase",
                moderatorID: this.getRef("moderator_moderator2").insertId,
                compteID: this.getRef("compte_moderator").insertId,
            },
        ];
        
        operationModeration.forEach((operation) => {
            this.insert(operation);
        });
    }
}

module.exports = OperationModerationSeeder;