import * as gamesaw from '../../gamesaw-ts/src/index';

export class Projectile {
    private gl: WebGLRenderingContext;
    private texture: gamesaw.GL.Texture;
    private sprite: gamesaw.GL.Sprite;
    public collider: gamesaw.Geometry.Circle;
    public speed: number;
    public damage: number;
    public direction: gamesaw.Geometry.Vector2;
    public dead: boolean = false;

    constructor(gl: WebGLRenderingContext, texture: gamesaw.GL.Texture, collider: gamesaw.Geometry.Circle, speed: number, damage: number, direction: gamesaw.Geometry.Vector2) {
        this.texture = texture;
        this.sprite = new gamesaw.GL.Sprite(texture, 6, 6, [406, 22, 6, 6]);
        this.collider = collider;
        this.speed = speed;
        this.damage = damage;
        this.direction = direction;
    }

    public isDead(): boolean {
        return this.dead;
    }

    public update(delta: number): void {
        let position: gamesaw.Geometry.Vector2 = new gamesaw.Geometry.Vector2(this.collider.pos.x, this.collider.pos.y);
        let step: gamesaw.Geometry.Vector2;

        step = this.direction.scale(this.speed * delta);
        position = position.add(step);

        this.collider.setX(position.x);
        this.collider.setY(position.y);

        if (this.collider.pos.x > 750 || this.collider.pos.x < 50 || this.collider.pos.y > 550 || this.collider.pos.y < 100) {
            this.dead = true;
        }
    }

    public render(renderer: gamesaw.GL.Render2d.Renderer2d) {
        this.sprite.renderScale(renderer, this.collider.pos.x - this.collider.radius, this.collider.pos.y - this.collider.radius, 2);
    }
}
