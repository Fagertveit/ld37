import * as gamesaw from '../../gamesaw-ts/src/index';
import { Player } from './player';
import { Enemy } from './enemy';
import { Projectile } from './projectile';

export class Game {
    private gl: WebGLRenderingContext;
    private application: gamesaw.Application;
    private menuScene: gamesaw.Scene;
    private mouse: gamesaw.Input.Mouse;
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

    // Enemy spawn
    public spawnPoints: gamesaw.Geometry.Point[] = [
        new gamesaw.Geometry.Point(400, 100),
        new gamesaw.Geometry.Point(50, 350),
        new gamesaw.Geometry.Point(750, 350),
        new gamesaw.Geometry.Point(400, 560)
    ];
    public spawnTimeout: number = 0;
    public spawnTime: number = 1000;

    constructor() {
        let that = this;
        this.application = new gamesaw.Application(this.width, this.height, this.targetFps);
        this.menuScene = this.application.sceneManager.addScene('menu');
        this.menuScene.add3dSurface('main');

        this.menuScene.render = (delta: number) => {
            that.render(delta);
        };

        this.menuScene.update = (delta: number) => {
            that.update(delta);
        };

        this.gl = this.menuScene.getContext('main') as WebGLRenderingContext;
        let bgCol = this.backgroundColor.getRGBAFloat();
        this.gl.clearColor(bgCol[0], bgCol[1], bgCol[2], 1);

        this.mouse = gamesaw.Input.Mouse.getInstance();
        this.mouse.init();

        this.renderer = new gamesaw.GL.Render2d.Renderer2d(this.gl);

        this.texture = new gamesaw.GL.Texture(this.gl, '../assets/img/texture.png');
        this.texture.width = 512;
        this.texture.height = 512;
        this.backgroundSprite = new gamesaw.GL.Sprite(this.texture, 400, 300, [0, 0, 400, 300]);
        this.healthSprite = new gamesaw.GL.Sprite(this.texture, 7, 7, [432, 0, 7, 7]);
        this.armorSprite = new gamesaw.GL.Sprite(this.texture, 7, 7, [440, 0, 7, 7]);

        this.fontRenderer = new gamesaw.GL.Font.FontRenderer(this.gl);
        this.font = new gamesaw.GL.Font.Font(this.gl, '../assets/data/default.xml');

        this.player = new Player(this.gl, this.texture);
        this.enemies.push(new Enemy(this.gl, this.texture, new gamesaw.Geometry.Circle(50, 50, 16)));

        this.application.init();
    }

    public update(delta: number) {
        this.player.update(delta);

        for (let e in this.enemies) {
            this.enemies[+e].update(delta, this.player);

            if (this.enemies[+e].isDead()) {
                this.player.addScore(this.enemies[+e].getWorth());
                this.enemies.splice(+e, 1);
            }
        }

        this.spawnTimeout += delta;

        if (this.spawnTimeout > this.spawnTime) {
            this.spawnTimeout = 0;
            let point = this.spawnPoints[Math.floor(Math.random() * 4)];
            this.enemies.push(new Enemy(this.gl, this.texture, new gamesaw.Geometry.Circle(point.x, point.y, 16)));
        }

        this.checkProjectileCollision();
    }

    public render(delta: number) {
        this.menuScene.clear('main');

        this.backgroundSprite.renderScale(this.renderer, 0, 0, 2);
        this.player.render(this.renderer);

        for (let e in this.enemies) {
            this.enemies[+e].render(this.renderer);
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
        this.font.drawString(this.fontRenderer, '0', 360, 10);
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
