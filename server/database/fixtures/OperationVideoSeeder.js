const AbstractSeeder = require("./AbstractSeeder");
const CompteSeeder = require("./CompteSeeder");
const BVideoSeeder = require("./BVideoSeeder");

class OperationVideoSeeder extends AbstractSeeder {
    constructor(){
        super({ table: "operation_video", truncate: true, dependencies: [CompteSeeder, BVideoSeeder] });
    }
    
    run() {
        const operationVideo = [
            {
                compteID: this.getRef("compte_user").insertId,
                videoID: this.getRef("video_Scarface").insertId,
                operationType: "read",
                operationDate: "2024-01-01",
            },
            {
                compteID: this.getRef("compte_admin").insertId,
                videoID: this.getRef("video_Scarface").insertId,
                operationType: "upload",
                operationDate: "2024-01-01",
            },
            {
                compteID: this.getRef("compte_user").insertId,
                videoID: this.getRef("video_Scarface").insertId,
                operationType: "share",
                operationDate: "2024-01-01",
            },
            {
                compteID: this.getRef("compte_user").insertId,
                videoID: this.getRef("video_Scarface").insertId,
                operationType: "favorite",
                operationDate: "2024-01-01",
            },
            {
                compteID: this.getRef("compte_admin").insertId,
                videoID: this.getRef("video_Scarface").insertId,
                operationType: "remove",
                operationDate: "2024-01-01",
            },
        ];
        
        operationVideo.forEach((operation) => {
            this.insert(operation);
        });
    }
}

module.exports = OperationVideoSeeder;