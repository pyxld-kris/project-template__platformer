import Phaser from "phaser";
import { Scene } from "phaser";

// Image imports

export default class UIScene extends Scene {
  constructor() {
    super("UIScene");
  }

  create() {
    let centerX = this.cameras.main.centerX;
    let centerY = this.cameras.main.centerY;
    let sceneWidth = this.cameras.main.width;
    let sceneHeight = this.cameras.main.width;

    // Create menu button
    let menuButton = this.add
      .text(5, 5, "MENU", {
        fontSize: "1rem",
        fontWeight: "bold"
      })
      .setOrigin(0, 0) // Make position based on top right corner
      .setInteractive()
      .on("pointerdown", () => {
        uiMenuContainer.setVisible(!uiMenuContainer.visible);
      });

    let uiMenuContainer = this.add
      .container(menuButton.x + 5, menuButton.y + menuButton.height + 5)
      .setVisible(false);

    // Create RESTART menu item
    uiMenuContainer.add(
      this.add
        .text(0, 0, "RESTART")
        .setInteractive()
        .on("pointerdown", () => {
          this.scene.manager.stop("CreditsScene");
          this.scene.manager.start("PlayScene");
        })
        .setOrigin(0, 0)
    );

    // Create CREDITS menu item
    uiMenuContainer.add(
      this.add
        .text(0, 25, "CREDITS")
        .setInteractive()
        .on("pointerdown", () => {
          this.scene.manager.start("CreditsScene");
        })
        .setOrigin(0, 0)
    );
  }
}
