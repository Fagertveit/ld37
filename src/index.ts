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
    public backgroundColor: gamesaw.Graphics.Color = new gamesaw.Graphics.Color(50, 50, 50);
    public texture: gamesaw.GL.Texture;
    public backgroundSprite: gamesaw.GL.Sprite;
    public player: Player;
    public enemies: Enemy[] = [];

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

        this.player = new Player(this.gl, this.texture);
        this.enemies.push(new Enemy(this.gl, this.texture, new gamesaw.Geometry.Circle(50, 50, 16)));

        this.application.init();
    }

    public update(delta: number) {
        this.player.update(delta);
        this.enemies[0].update(delta, this.player);

        this.checkProjectileCollision();
    }

    public render(delta: number) {
        this.menuScene.clear('main');

        this.backgroundSprite.renderScale(this.renderer, 0, 0, 2);
        this.player.render(this.renderer);
        this.enemies[0].render(this.renderer);

        this.renderer.execute();
    }

    public checkProjectileCollision(): void {
        let playerProjectiles: Projectile[] = this.player.getProjectiles();
        let playerCollider = this.player.getCollider();

        for (let i in playerProjectiles) {
            for (let e in this.enemies) {
                let enemyCollider = this.enemies[+e].getCollider();

                if (gamesaw.Geometry.intersects(playerProjectiles[+i].collider, enemyCollider)) {
                    playerProjectiles[+i].dead = true;
                }
            }
        }
    }
}
