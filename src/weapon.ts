import * as gamesaw from '../../gamesaw-ts/src/index';

const Weapons = [
    {
        type: 0,
        name: 'Widowmaker',
        damage: 5,
        autoFire: false,
        melee: false,
        startAmmo: 0
    },
    {
        type: 1,
        name: 'Shotgun',
        damage: 10,
        autoFire: false,
        melee: false,
        startAmmo: 20
    },
    {
        type: 2,
        name: 'Minigun',
        damage: 5,
        autoFire: true,
        melee: false,
        startAmmo: 100
    }
];

export class Weapon {
    private gl: WebGLRenderingContext;
    public sprite: gamesaw.GL.Sprite;
    public type: number;
    public name: string;
    public damage: number;
    public autoFire: boolean;
    public melee: boolean;
    public startAmmo: number;
    public ammo: number;

    constructor() {

    }

    public setWeapon(type: number, sprite: gamesaw.GL.Sprite) {
        let data = Weapons[type];
        this.type = data.type;
        this.name = data.name;
        this.damage = data.damage;
        this.autoFire = data.autoFire;
        this.melee = data.melee;
        this.startAmmo = data.startAmmo;
        this.ammo = data.startAmmo;
        this.sprite = sprite;
    }

    public useAmmo() {
        this.ammo -= 1;

        if (this.ammo === 0) {
            this.setWeapon(0, null);
        }
    }

    public render(renderer: gamesaw.GL.Render2d.Renderer2d) {
        this.sprite.renderScale(renderer, 220, 12, 2);
    }
}
