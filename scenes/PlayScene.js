import Phaser from "phaser";

import Character from "../classes/Character.js";
import Platform from "../classes/Platform.js";

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    // Start UIScene, which will layer on top of PlayScene
    this.scene.run("UIScene");

    // Create background
    this.background = this.add.sprite(0, 0, "background").setOrigin(0, 0);
    this.physics.world.setBounds(
      0,
      0,
      this.background.width,
      this.background.height
    );

    this.player = new Character(this, 10, 0);
    this.player.setCollideWorldBounds(true);

    const camera = this.cameras.main;
    const cursors = this.input.keyboard.createCursorKeys();
    camera.setBounds(
      0,
      0,
      this.physics.world.bounds.width,
      this.physics.world.bounds.height
    );
    camera.startFollow(this.player);

    // Upper platform
    this.physics.add.collider(this.player, new Platform(this, 270, 115));
    // Upper platform
    this.physics.add.collider(this.player, new Platform(this, 160, 80));
    // Upper platform
    this.physics.add.collider(this.player, new Platform(this, 60, 40));
  }

  update(time, delta) {
    this.player.update(time, delta);
  }
}
