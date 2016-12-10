import * as gamesaw from '../../gamesaw-ts/src/index';

const Powerups = [
    {
        type: 0,
        name: 'Small medkit',
        value: 25
    },
    {
        type: 1,
        name: 'Medium medkit',
        value: 50
    },
    {
        type: 2,
        name: 'Super health',
        value: 100
    },
    {
        type: 3,
        name: 'Speed',
        value: 2
    },
    {
        type: 4,
        name: 'Quad damage',
        value: 4
    }
];

export class Powerup {
    private gl: WebGLRenderingContext;
    private texture: gamesaw.GL.Texture;
    public sprite: gamesaw.GL.Sprite;
    public name: string;
    public type: number;
    public value: number;
    public timeout: number;
    public active: boolean;

    constructor(sprite: gamesaw.GL.Sprite, time: number) {
        this.sprite = sprite;
        this.timeout = time;
        this.active = true;
    }

    public update(delta: number): void {
        this.timeout -= delta;
        if (this.timeout < 0) {
            this.active = false;
        }
    }

    public render(renderer: gamesaw.GL.Render2d.Renderer2d): void {
        this.sprite.renderScale(renderer, 148, 10, 2);
    }

    public isActive(): boolean {
        return this.active;
    }

    public getRemainingTime(): number {
        return this.timeout;
    }
}
