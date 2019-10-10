import { EventHandler, UpdateEvent } from "../MainEngine/GameEngine";

/**
 * 
 * Handles the prototype online for the 2D mode.
 * 
 */

 /**
  * Communicate to the server.
  */
 class Server{

 }

 class OnPlayerJoin{
     
 }

 class OnlineMode {
    static url = "";
    static playerPrefab = "";
    static enabled = false;
    enabled(mainUrl, playerPrefab){
        OnlineMode.url = mainUrl;
        OnlineMode.playerPrefab = playerPrefab;
        OnlineMode.enabled = true;
        EventHandler.registerHandler(UpdateEvent, e => {
            fetch(OnlineMode.url).then(res => res.json()).then(data =>{
                console.log(data);
            });
        })
    }
 }

 export {OnlineMode, Server};