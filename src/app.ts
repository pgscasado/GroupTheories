import {AUTO, Game} from 'phaser'
import { LevelSelect } from './level.select.scene'
import { MainMenu } from './main.scene'
import { LevelExec } from './level.exec.scene'
// necessário desabilitar essa regra para o Webpack incluir esses arquivos em ./dist
// tslint:disable-next-line: no-require-imports
require('file-loader?name=[name].[ext]!../index.html')
// tslint:disable-next-line: no-require-imports
require('./css/fonts.css')
// tslint:disable-next-line: no-require-imports
require('./css/master.css')

type TGameSettings = {
	height: number,
	locale: string,
	width: number,
}

export const gameSettings: TGameSettings = {
	width: 800,
	height: 600,
	locale: 'pt-BR',
}

export default new Game({
	type: AUTO,
	width: gameSettings.width,
	height: gameSettings.height,
	scene: [MainMenu, LevelSelect, LevelExec],
	physics: {
		default: 'arcade',
	},
})
