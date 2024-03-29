import './style.css'
import Phaser from 'phaser'
import config from './config'
import Loading from './scenes/Loading'
import UI from './scenes/UI'
import MainMenu from './scenes/MainMenu'
import LoadingScreen from './scenes/LoadingScreen'
import World from './scenes/World'
import Pong from './scenes/games/pong/Pong'
import DonkeyKong from './scenes/games/donkeykong/DonkeyKong'
import Rhythm from './scenes/games/rhythm/Rhythm'
import WhacAMole from './scenes/games/whac-a-mole/whac-a-mole'
new Phaser.Game(
	Object.assign(config, {
		scene: [LoadingScreen, Loading, MainMenu, UI, World, Pong, DonkeyKong, Rhythm, WhacAMole],
	})
)
