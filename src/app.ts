import {AUTO, Game} from 'phaser'
import { MainMenu } from './main.scene'
// necessário desabilitar essa regra para o Webpack incluir esses arquivos em ./dist
// tslint:disable-next-line: no-require-imports
require('file-loader?name=[name].[ext]!../index.html')
// tslint:disable-next-line: no-require-imports
require('./css/fonts.css')
// tslint:disable-next-line: no-require-imports
require('./css/master.css')

export type TGameSettings = {
	height: number,
	locale: string,
	width: number,
}

const gameSettings: TGameSettings = {
	width: 800,
	height: 600,
	locale: 'pt-BR',
}

export default new Game({
	type: AUTO,
	width: gameSettings.width,
	height: gameSettings.height,
	scene: new MainMenu(gameSettings),
	physics: {
		default: 'arcade',
	},
})
