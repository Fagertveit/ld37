import * as gamesaw from '../../gamesaw-ts/src/index';

export class Player {
    private gl: WebGLRenderingContext;
    public collider: gamesaw.Geometry.Circle;
    public texture: gamesaw.GL.Texture;
    public baseSprite: gamesaw.GL.Sprite;
    public dirSprite: gamesaw.GL.Sprite;
    private mouse: gamesaw.Input.Mouse;
    private keyboard: gamesaw.Input.Keyboard;

    public direction: gamesaw.Geometry.Vector2;
    public speed: number = 0.2;

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
    }

    public render(renderer: gamesaw.GL.Render2d.Renderer2d): void {
        this.baseSprite.renderScale(renderer, this.collider.pos.x + this.collider.radius, this.collider.pos.y + this.collider.radius, 2);
        this.dirSprite.renderAngleScale(renderer, this.collider.pos.x + this.collider.radius, this.collider.pos.y + this.collider.radius, gamesaw.Utility.radianToDegree(this.direction.angle()), 2);
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

        return directionVector.normalize();
    }

    private updateMovement(direction: gamesaw.Geometry.Vector2, delta: number): void {
        let position: gamesaw.Geometry.Vector2 = new gamesaw.Geometry.Vector2(this.collider.pos.x, this.collider.pos.y);

        direction = direction.scale(this.speed * delta);
        position = position.add(direction);

        this.collider.setX(position.x);
        this.collider.setY(position.y);
    }
}
