import {AUTO, Game} from 'phaser'
import { MainMenu } from './main.scene'
require('file-loader?name=[name].[ext]!../index.html');
require('./assets/fonts/import.css')

export type TGameSettings = {
	width: number,
	height: number,
	locale: string
}

const gameSettings: TGameSettings = {
	width: 800,
	height: 600,
	locale: 'pt-BR'
};

export default new Game({
	type: AUTO,
	width: gameSettings.width,
	height: gameSettings.height,
	scene: new MainMenu(gameSettings),
	physics: {
		default: 'arcade'
	}
});