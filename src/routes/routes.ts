import express from 'express';
import { PlayerController } from '../controllers/PlayerController';

let router = express.Router();

let playerController = new PlayerController();

// players
router.get( '/players', playerController.getPlayers );

export { router };