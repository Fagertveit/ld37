import * as gamesaw from '../../gamesaw-ts/src/index';

export class Game {
    private gl: WebGLRenderingContext;
    private application: gamesaw.Application;
    private menuScene: gamesaw.Scene;
    public width: number = 800;
    public height: number = 600;
    public targetFps: number = 10;
    public renderer: gamesaw.GL.Render2d.Renderer2d;
    public backgroundColor: gamesaw.Graphics.Color = new gamesaw.Graphics.Color(50, 50, 50);
    public backgroundTexture: gamesaw.GL.Texture;
    public backgroundSprite: gamesaw.GL.Sprite;

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

        this.renderer = new gamesaw.GL.Render2d.Renderer2d(this.gl);

        this.backgroundTexture = new gamesaw.GL.Texture(this.gl, '../assets/img/texture.png');
        this.backgroundTexture.width = 2048;
        this.backgroundTexture.height = 2048;
        this.backgroundSprite = new gamesaw.GL.Sprite(this.backgroundTexture, 400, 300, [0, 0, 400, 300]);

        this.application.init();
    }

    public update(delta: number) {

    }

    public render(delta: number) {
        this.menuScene.clear('main');

        this.backgroundSprite.renderScale(this.renderer, 0, 0, 2);

        this.renderer.execute();
    }
}
