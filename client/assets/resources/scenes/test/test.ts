import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    private _x = 0;

    start() {
        // Your initialization goes here.
    }

    update(deltaTime: number) {
        // this.node.position = new Vec3(0, 0, 0);
        // this._x -= deltaTime;
        // if (this._x < -12) {
        //     this._x = 12;
        // }
        // this.node.position = new Vec3(0, 0, this._x);
    }
}
