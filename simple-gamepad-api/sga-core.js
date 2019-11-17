console.log('Loaded SGA core');

class TwoWayMap {
    constructor(map) {
       this.map = map;
       this.reverseMap = {};
       for(let key in map) {
          const value = map[key];
          this.reverseMap[value] = key;   
       }
    }
    get(key) { return this.map[key]; }
    value(key) { return this.reverseMap[key]; }
}

function detectMapping(gamepad) {
    if (gamepad.id.includes("(Vendor: 054c Product: 0cda)")) {
        var psClassicMapping = {
            simpleName: "PlayStation Classic Controller",
            buttons: new TwoWayMap({
                X: 0,
                A: 1,
                B: 2,
                Y: 3,
                L1: 6,
                L2: 4,
                R1: 7,
                R2: 5, 
                SELECT: 8,
                START: 9
            }),
            axes: new TwoWayMap({
                LEFT_THUMB_X: 0,
                LEFT_THUMB_Y: 1
            })
        };
        return psClassicMapping;
    }

    var sn30mapping = {
        simpleName: "8bitdo SN30 Controller",
        buttons: new TwoWayMap({
            UP: 12,
            DOWN: 13,
            LEFT: 14,
            RIGHT: 15,
            A: 1,
            B: 0,
            X: 3,
            Y: 2,
            L1: 4,
            L2: 6,
            R1: 5,
            R2: 7,
            SELECT: 8,
            START: 9,
            LEFT_THUMB_CLICK: 10,
            RIGHT_THUMB_CLICK: 11
        }),
        axes: new TwoWayMap({
            LEFT_THUMB_X: 0,
            LEFT_THUMB_Y: 1,
            RIGHT_THUMB_X: 2,
            RIGHT_THUMB_Y: 3
        })
    };
    return sn30mapping;
}

export class SimpleGamepadAPI {
    constructor(options) {
        options && console.log(options) || (options = {});
        //this._multiPlayer = !!options.multiPlayer;
        this._onConnectCallback;
        this._onDisconnectCallback;
        this._mapping;
        this._listening = false;
        this._paused = false;
        this._connectedGamepads = [];
        this._listen();
    }
    _poll() {
        let pads = navigator.getGamepads();
        if (pads.length === 0) return;
        if (this._connectedGamepads.length === 0) return;
        let activeIndex = this._connectedGamepads[0].index; //this._multiPlayer...
        this._connectedGamepads[0] = [].slice.call(pads).find((e)=>{return e.index === activeIndex});
    }
    _listen() {
        if (this._listening === true) return;
        this._listening = true;
        window.addEventListener("gamepadconnected", (e) => {
            var newGp = navigator.getGamepads()[e.gamepad.index];
            this._connectedGamepads = [newGp];
            !this._paused && this._onConnectCallback && this._onConnectCallback(newGp);
        });
        window.addEventListener("gamepaddisconnected", function(e) {
            !this._paused && this._onDisconnectCallback && this._onDisconnectCallback(e);
        });
    }
    _frame(processInput) {
        this._gameLoopId = requestAnimationFrame(()=>{
            this._poll();
            if(this._connectedGamepads) {
                processInput({mapping:this._mapping,gamepads:this._connectedGamepads});
            }
            this._frame(processInput);
        });
    }
    on(eventName, callback, options) {
        switch (eventName) {
            case 'connect':
                this._onConnectCallback = (gamepad)=> {
                    if(options && options.autoDetect) {
                       this._mapping = detectMapping(gamepad);
                    }
                    callback({mapping: this._mapping, gamepad: gamepad, index:0}); //this._multiPlayer
                    this._poll();
                };
                break;
            case 'disconnect':
                this._onDisconnectCallback = (gamepad)=> {
                    callback({mapping: this._mapping, gamepad: gamepad, index:0}); //this._multiPlayer
                };
                break;
            case 'loop':
                !this._paused && this._frame(callback);
                break;
        }
    }
    pause(){
        this._paused = !this._paused;
    }
    stop(){
        cancelAnimationFrame(this._gameLoopId);
    }
}