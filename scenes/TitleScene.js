import Phaser from "phaser";
import { Scene } from "phaser";

// Image imports

export default class LoadingScene extends Scene {
  constructor() {
    super("TitleScene");
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    this.add
      .text(centerX, centerY - 50, "Your Title", {
        fontSize: "3rem",
        fontWeight: "bold"
      })
      .setOrigin(0.5, 0.5);
    this.add
      .text(centerX, centerY, "Click or touch to begin!", {
        fontSize: "1rem"
      })
      .setOrigin(0.5, 0.5);

    this.input.on("pointerdown", () => {
      this.nextScene();
    });
  }

  nextScene() {
    this.scene.start("PlayScene");
  }
}
