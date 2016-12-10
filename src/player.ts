import * as gamesaw from '../../gamesaw-ts/src/index';
import { Projectile } from './projectile';

export class Player {
    private gl: WebGLRenderingContext;
    public collider: gamesaw.Geometry.Circle;
    public texture: gamesaw.GL.Texture;
    public baseSprite: gamesaw.GL.Sprite;
    public dirSprite: gamesaw.GL.Sprite;
    private mouse: gamesaw.Input.Mouse;
    private keyboard: gamesaw.Input.Keyboard;

    public health: number = 100;
    public maxHealth: number = 100;
    public armor: number = 50;
    public maxArmor: number = 100;
    public damage: number = 5;
    public score: number = 0;

    public direction: gamesaw.Geometry.Vector2;
    public speed: number = 0.2;

    public projectiles: Projectile[] = [];

    constructor(gl: WebGLRenderingContext, texture: gamesaw.GL.Texture) {
        this.gl = gl;
        this.texture = texture;
        this.collider = new gamesaw.Geometry.Circle(400, 300, 16);
        this.baseSprite = new gamesaw.GL.Sprite(this.texture, 16, 16, [416, 0, 16, 16]);
        this.dirSprite = new gamesaw.GL.Sprite(this.texture, 16, 16, [416, 16, 16, 16]);
        this.direction = new gamesaw.Geometry.Vector2(0.0, 0.0);

        this.mouse = gamesaw.Input.Mouse.getInstance();
        this.keyboard = gamesaw.Input.Keyboard.getInstance();
    }

    public update(delta: number): void {
        this.calculateDirection();

        this.updateMovement(this.handleInput(), delta);

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

    public addScore(score: number): void {
        this.score += score;
    }

    public getScore(): string {
        return this.score.toString();
    }

    public doDamage(damage: number): void {
        this.health -= damage;
    }

    private calculateDirection(): void {
        let mouseVector: gamesaw.Geometry.Vector2 = new gamesaw.Geometry.Vector2(this.mouse.x, this.mouse.y);
        let positionVector: gamesaw.Geometry.Vector2 = new gamesaw.Geometry.Vector2(this.collider.pos.x, this.collider.pos.y);

        this.direction = mouseVector.sub(positionVector).normalize();
    }

    private handleInput(): gamesaw.Geometry.Vector2 {
        let key = gamesaw.Input.Key;
        let directionVector: gamesaw.Geometry.Vector2 = new gamesaw.Geometry.Vector2(0.0, 0.0);

        if (this.keyboard.keys[key['W']]) {
            directionVector = directionVector.add(new gamesaw.Geometry.Vector2(0.0, -1.0));
        }

        if (this.keyboard.keys[key['A']]) {
            directionVector = directionVector.add(new gamesaw.Geometry.Vector2(-1.0, 0.0));
        }

        if (this.keyboard.keys[key['S']]) {
            directionVector = directionVector.add(new gamesaw.Geometry.Vector2(0.0, 1.0));
        }

        if (this.keyboard.keys[key['D']]) {
            directionVector = directionVector.add(new gamesaw.Geometry.Vector2(1.0, 0.0));
        }

        if (this.mouse.button[0]) {
            this.projectiles.push(new Projectile(this.gl, this.texture, new gamesaw.Geometry.Circle(this.collider.pos.x, this.collider.pos.y, 3), 0.6, this.damage, this.direction.copy()));
            this.mouse.button[0] = false;
        }

        return directionVector.normalize();
    }

    private updateMovement(direction: gamesaw.Geometry.Vector2, delta: number): void {
        let position: gamesaw.Geometry.Vector2 = new gamesaw.Geometry.Vector2(this.collider.pos.x, this.collider.pos.y);

        direction = direction.scale(this.speed * delta);
        position = position.add(direction);

        if (position.y > 530) {
            position.y = 530;
        }

        if (position.y < 140) {
            position.y = 140;
        }

        if (position.x < 80) {
            position.x = 80;
        }

        if (position.x > 720) {
            position.x = 720;
        }

        this.collider.setX(position.x);
        this.collider.setY(position.y);
    }
}
