import * as rjsengine from './node_modules/rjsengine/JSEngine2D.js';
import { EventHandler, UpdateEvent, KeyHandler } from './node_modules/rjsengine/JSEngine2D.js';
import { BoxCollider } from './node_modules/rjsengine/2DEngine/CollisionManager.js';
import {OnlineMode} from './node_modules/rjsengine/JSEngine2D.js';

class o extends rjsengine.Prefab{
    constructor(){
        super();
        var rect = new rjsengine.Rectangle().setPosition(0, 0).setColor("green").setScale(10, 10);
        var rect2 = new rjsengine.Rectangle().setPosition(20, 0).setColor("red").setScale(10, 10);
        this.add(rect);
        this.add(rect2);
        console.log(this);
    }

    move(){
        this.translateBy(20, 20);
    }
}
// rjsengine.OnlineMode
rjsengine.OnlineMode.enable('http:\\\\localhost:5501/lobby1', o);

rjsengine.GameEngine.initialize();
var player = new o();
player.setCollision(new BoxCollider());
rjsengine.ObjectManager.add(player);

var box = new rjsengine.Rectangle().setPosition(20, 0).setColor("blue").setScale(50, 50);
box.setCollision(new BoxCollider());
rjsengine.ObjectManager.add(box);

EventHandler.registerHandler(UpdateEvent, e => {
    if(KeyHandler.isKeyDown('s'))
        player.translateBy(0, 3);
    if(KeyHandler.isKeyDown('w'))
        player.translateBy(0, -3);
    if(KeyHandler.isKeyDown('d'))
        player.translateBy(3, 0);
    if(KeyHandler.isKeyDown('a'))
        player.translateBy(-3, 0);
})