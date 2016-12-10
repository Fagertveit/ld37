import * as gamesaw from '../../gamesaw-ts/src/index';
import { Player } from './player';
import { Enemy } from './enemy';
import { Projectile } from './projectile';

interface Spawn {
    type: string;
    id: number;
    collider: gamesaw.Geometry.AABB;
    sprite: gamesaw.GL.Sprite;
}

export class Game {
    private gl: WebGLRenderingContext;
    private application: gamesaw.Application;
    private scene: gamesaw.Scene;
    private mouse: gamesaw.Input.Mouse;
    private keyboard: gamesaw.Input.Keyboard;
    public width: number = 800;
    public height: number = 600;
    public targetFps: number = 60;
    public renderer: gamesaw.GL.Render2d.Renderer2d;
    public fontRenderer: gamesaw.GL.Font.FontRenderer;
    public backgroundColor: gamesaw.Graphics.Color = new gamesaw.Graphics.Color(50, 50, 50);
    public texture: gamesaw.GL.Texture;
    public font: gamesaw.GL.Font.Font;
    public backgroundSprite: gamesaw.GL.Sprite;
    public healthSprite: gamesaw.GL.Sprite;
    public armorSprite: gamesaw.GL.Sprite;
    public player: Player;
    public enemies: Enemy[] = [];
    public paused: boolean = false;

    // Powerup & Weapon spawn
    public spawns: Spawn[] = [];
    public spawnTimeout: number = 0;
    public spawnTime: number = 10000;

    public spawnSprites: gamesaw.GL.Sprite[] = [];

    // Enemy spawn
    public enemyPoints: gamesaw.Geometry.Point[] = [
        new gamesaw.Geometry.Point(400, 100),
        new gamesaw.Geometry.Point(50, 350),
        new gamesaw.Geometry.Point(750, 350),
        new gamesaw.Geometry.Point(400, 560)
    ];
    public enemyTimeout: number = 0;
    public enemyTime: number = 1000;

    constructor() {
        let that = this;
        this.application = new gamesaw.Application(this.width, this.height, this.targetFps);
        this.scene = this.application.sceneManager.addScene('menu');
        this.scene.add3dSurface('main');

        this.scene.render = (delta: number) => {
            that.render(delta);
        };

        this.scene.update = (delta: number) => {
            that.update(delta);
        };

        this.gl = this.scene.getContext('main') as WebGLRenderingContext;
        let bgCol = this.backgroundColor.getRGBAFloat();
        this.gl.clearColor(bgCol[0], bgCol[1], bgCol[2], 1);

        this.mouse = gamesaw.Input.Mouse.getInstance();
        this.keyboard = gamesaw.Input.Keyboard.getInstance();
        this.mouse.init();

        this.renderer = new gamesaw.GL.Render2d.Renderer2d(this.gl);

        this.texture = new gamesaw.GL.Texture(this.gl, '../assets/img/texture.png');
        this.texture.width = 512;
        this.texture.height = 512;
        this.backgroundSprite = new gamesaw.GL.Sprite(this.texture, 400, 300, [0, 0, 400, 300]);
        this.healthSprite = new gamesaw.GL.Sprite(this.texture, 7, 7, [432, 0, 7, 7]);
        this.armorSprite = new gamesaw.GL.Sprite(this.texture, 7, 7, [440, 0, 7, 7]);

        this.spawnSprites = [
            new gamesaw.GL.Sprite(this.texture, 32, 16, [448, 16, 32, 16]), // Shotgun
            new gamesaw.GL.Sprite(this.texture, 32, 16, [448, 0, 32, 16]), // Minigun
            new gamesaw.GL.Sprite(this.texture, 16, 16, [480, 0, 16, 16]), // Healthpack
            new gamesaw.GL.Sprite(this.texture, 16, 16, [480, 16, 16, 16]), // Speedboost
            new gamesaw.GL.Sprite(this.texture, 16, 16, [496, 16, 16, 16]) // Quad damage
        ];

        this.fontRenderer = new gamesaw.GL.Font.FontRenderer(this.gl);
        this.font = new gamesaw.GL.Font.Font(this.gl, '../assets/data/default.xml');

        this.player = new Player(this.gl, this.texture);
        this.enemies.push(new Enemy(this.gl, this.texture, new gamesaw.Geometry.Circle(50, 50, 16)));

        this.application.init();
    }

    public update(delta: number) {
        let key = gamesaw.Input.Key;

        if (this.keyboard.keys[key['PAUSE']] || this.keyboard.keys[key['P']]) {
            this.paused = !this.paused;
            this.keyboard.keys[key['PAUSE']] = false;
            this.keyboard.keys[key['P']] = false;
        }

        if (!this.paused) {
            this.player.update(delta);
            this.updateEnemies(delta);
            this.updatePowerupWeaponSpawn(delta);

            for (let s in this.spawns) {
                if (gamesaw.Geometry.intersects(this.player.collider, this.spawns[+s].collider)) {
                    if (this.spawns[+s].type === 'weapon') {
                        this.player.applyWeapon(this.spawns[+s].id, this.spawns[+s].sprite);
                    } else {
                        this.player.applyPowerUp(this.spawns[+s].id, this.spawns[+s].sprite);
                    }
                    this.spawns.splice(+s, 1);
                }
            }

            this.checkProjectileCollision();
        }
    }

    public render(delta: number) {
        this.scene.clear('main');

        this.backgroundSprite.renderScale(this.renderer, 0, 0, 2);
        this.player.render(this.renderer);

        for (let e in this.enemies) {
            this.enemies[+e].render(this.renderer);
        }

        for (let s in this.spawns) {
            let collider = this.spawns[+s].collider;
            this.spawns[+s].sprite.renderScale(this.renderer, collider.pos.x - collider.halfWidth, collider.pos.y - collider.halfHeight, 2);
        }

        this.renderStatus();

        this.renderer.execute();
        this.fontRenderer.execute();
    }

    public renderStatus(): void {
        let healthWidth = 70 * (this.player.health / this.player.maxHealth);
        let armorWidth = 70 * (this.player.armor / this.player.maxArmor);

        this.healthSprite.width = healthWidth;
        this.armorSprite.width = armorWidth;

        this.healthSprite.renderScale(this.renderer, 450, 10, 2);
        this.armorSprite.renderScale(this.renderer, 450, 38, 2);

        this.font.align = 2;
        this.font.drawString(this.fontRenderer, this.player.getScore(), 770, 18);

        // 44, 6
        this.font.align = 1;
        this.font.drawString(this.fontRenderer, '0', 88, 10);
        // 180, 7
        this.font.drawString(this.fontRenderer, this.player.getAmmo(), 360, 10);
    }

    public updatePowerupWeaponSpawn(delta: number): void {
        this.spawnTimeout += delta;
        if (this.spawnTimeout > this.spawnTime) {
            this.spawnTimeout = 0;
            let weaponSpawn: boolean = (Math.random() * 10 > 7);

            if (weaponSpawn) {
                let weaponType: number = (Math.random() * 10 > 7) ? 1 : 2;
                let x: number = (Math.random() * 600) + 100;
                let y: number = (Math.random() * 400) + 150;
                let sprite = this.spawnSprites[weaponType - 1];
                this.spawns.push({type: 'weapon', id: weaponType, collider: new gamesaw.Geometry.AABB(x, y, 32, 16), sprite: sprite});
            } else {
                let powerupType: number = Math.floor(Math.random() * 5);
                let x: number = (Math.random() * 600) + 100;
                let y: number = (Math.random() * 400) + 150;
                let sprite: gamesaw.GL.Sprite;

                switch (powerupType) {
                    case 0:
                    case 1:
                    case 2:
                    sprite = this.spawnSprites[2];
                    break;
                    case 3:
                    sprite = this.spawnSprites[3];
                    break;
                    case 4:
                    sprite = this.spawnSprites[4];
                    break;
                    case 5:
                    sprite = this.spawnSprites[2];
                    break;
                }
                this.spawns.push({type: 'powerup', id: powerupType, collider: new gamesaw.Geometry.AABB(x, y, 16, 16), sprite: sprite});
            }
        }
    }

    public updateEnemies(delta: number) {
        for (let e in this.enemies) {
            this.enemies[+e].update(delta, this.player);

            if (this.enemies[+e].isDead()) {
                this.player.addScore(this.enemies[+e].getWorth());
                this.enemies.splice(+e, 1);
            }
        }

        this.enemyTimeout += delta;

        if (this.enemyTimeout > this.enemyTime) {
            this.enemyTimeout = 0;
            let point = this.enemyPoints[Math.floor(Math.random() * 4)];
            this.enemies.push(new Enemy(this.gl, this.texture, new gamesaw.Geometry.Circle(point.x, point.y, 16)));
        }
    }

    public checkProjectileCollision(): void {
        let playerProjectiles: Projectile[] = this.player.getProjectiles();
        let playerCollider = this.player.getCollider();

        for (let i in playerProjectiles) {
            for (let e in this.enemies) {
                let enemyCollider = this.enemies[+e].getCollider();

                if (gamesaw.Geometry.intersects(playerProjectiles[+i].collider, enemyCollider)) {
                    this.enemies[+e].doDamage(playerProjectiles[+i].damage);
                    playerProjectiles[+i].dead = true;
                }
            }
        }

        for (let e in this.enemies) {
            let enemyProjectiles: Projectile[] = this.enemies[+e].projectiles;

            for (let i in enemyProjectiles) {
                if (gamesaw.Geometry.intersects(enemyProjectiles[+i].collider, playerCollider)) {
                    this.player.doDamage(enemyProjectiles[+i].damage);
                    enemyProjectiles[+i].dead = true;
                }
            }
        }
    }
}
