import Phaser from "phaser";

import Character from "../classes/Character.js";

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    // Start UIScene, which will layer on top of PlayScene
    this.scene.run("UIScene");

    this.player = new Character(this, 10, 0);
    this.player.sprite.setCollideWorldBounds(true);

    const camera = this.cameras.main;
    const cursors = this.input.keyboard.createCursorKeys();
    camera.setBounds(0, 0, this.game.config.width, this.game.config.height);

    // Upper platform
    this.physics.add.collider(
      this.player.sprite,
      this.addPhysicalRectangle(150, 100, 500, 10, 0x00aa00)
    );

    // Middle platform
    this.physics.add.collider(
      this.player.sprite,
      this.addPhysicalRectangle(350, 200, 500, 10, 0x00aa00)
    );

    // Lower platform
    this.physics.add.collider(
      this.player.sprite,
      this.addPhysicalRectangle(250, 300, 500, 10, 0x00aa00)
    );

    //this.scene.add("UIScene");
  }

  update(time, delta) {
    this.player.update(time, delta);
  }

  /* <Begin> helper functions added by Kris */
  //
  //

  addPhysicalRectangle(x, y, width, height, color, alphaIThinkMaybe) {
    // TODO: alphaIThinkMaybe name change
    let rect = this.add.rectangle(x, y, width, height, color, alphaIThinkMaybe);
    rect = this.physics.add.existing(rect, true);

    return rect;
  }

  /* </End> Helper functions added by kris */
}
