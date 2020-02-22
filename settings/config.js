import Phaser from "phaser";
import PlayScene from "/scenes/PlayScene.js";

export const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 300,
  parent: "game-container",
  pixelArt: true,
  zoom: 1,
  backgroundColor: "#998877",
  scene: PlayScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 }
    }
  }
};
