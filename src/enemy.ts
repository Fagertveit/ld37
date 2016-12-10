import * as gamesaw from '../../gamesaw-ts/src/index';
import { Projectile } from './projectile';
import { Player } from './player';

export class Enemy {
    private gl: WebGLRenderingContext;
    public collider: gamesaw.Geometry.Circle;
    public texture: gamesaw.GL.Texture;
    public baseSprite: gamesaw.GL.Sprite;
    public dirSprite: gamesaw.GL.Sprite;

    public direction: gamesaw.Geometry.Vector2;
    public speed: number = 0.15;
    public fireTimeout: number;
    public msBetweenRounds: 1000;

    public projectiles: Projectile[] = [];

    constructor(gl: WebGLRenderingContext, texture: gamesaw.GL.Texture, collider: gamesaw.Geometry.Circle) {
        this.gl = gl;
        this.texture = texture;
        this.collider = collider;
        this.baseSprite = new gamesaw.GL.Sprite(this.texture, 16, 16, [400, 0, 16, 16]);
        this.dirSprite = new gamesaw.GL.Sprite(this.texture, 16, 16, [416, 16, 16, 16]);
        this.direction = new gamesaw.Geometry.Vector2(0.0, 0.0);
    }

    public update(delta: number, player: Player): void {
        this.direction = this.seek(new gamesaw.Geometry.Vector2(player.collider.pos.x, player.collider.pos.y));
        this.updateMovement(this.direction, delta);

        this.fireTimeout += delta;

        if (this.fireTimeout > this.msBetweenRounds) {
            this.fireTimeout = 0;
            this.projectiles.push(new Projectile(this.gl, this.texture, new gamesaw.Geometry.Circle(this.collider.pos.x, this.collider.pos.y, 3), 0.6, this.direction.copy()));
        }

        for (let i in this.projectiles) {
            this.projectiles[+i].update(delta);

            if (this.projectiles[+i].isDead()) {
                this.projectiles.splice(+i, 1);
            }
        }
    }

    public render(renderer: gamesaw.GL.Render2d.Renderer2d): void {
        this.baseSprite.renderScale(renderer, this.collider.pos.x - this.collider.radius, this.collider.pos.y - this.collider.radius, 2);
        this.dirSprite.renderAngleScale(renderer, this.collider.pos.x - this.collider.radius, this.collider.pos.y - this.collider.radius, gamesaw.Utility.radianToDegree(this.direction.angle()), 2);

        for (let i in this.projectiles) {
            this.projectiles[+i].render(renderer);
        }
    }

    public getProjectiles(): Projectile[] {
        return this.projectiles;
    }

    public getCollider(): gamesaw.Geometry.Circle {
        return this.collider;
    }

    private seek(playerPosition: gamesaw.Geometry.Vector2): gamesaw.Geometry.Vector2 {
        let positionVector: gamesaw.Geometry.Vector2 = new gamesaw.Geometry.Vector2(this.collider.pos.x, this.collider.pos.y);

        return playerPosition.sub(positionVector).normalize();
    }

    private updateMovement(direction: gamesaw.Geometry.Vector2, delta: number): void {
        let position: gamesaw.Geometry.Vector2 = new gamesaw.Geometry.Vector2(this.collider.pos.x, this.collider.pos.y);

        direction = direction.scale(this.speed * delta);
        position = position.add(direction);

        this.collider.setX(position.x);
        this.collider.setY(position.y);
    }
}
