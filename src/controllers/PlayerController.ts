import { Player } from '../models/player';

export class PlayerController {
    constructor() {

    }

    sendJsonResponse = (response: any, status: any, content: any) => {
        response.status(status);
        response.json(content);
    };

    getPlayers = (request: any, response: any) => {
        Player
            .find()
            .exec((err: any, result: any) => {
                if (err) {
                    this.sendJsonResponse(response, 500, err);
                    return;
                }
                console.log("Result:");
                console.log(JSON.stringify(result));
                this.sendJsonResponse(response, 200, result);
            });
    }
}
