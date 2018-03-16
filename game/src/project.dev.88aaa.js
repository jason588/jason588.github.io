require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof require && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a09cUWOTRLd6Vyhy0/jcWQ", "Game");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        starPrefab: {
          default: null,
          type: cc.Prefab
        },
        maxStarDuration: 0,
        minStarDuration: 0,
        ground: {
          default: null,
          type: cc.Node
        },
        player: {
          default: null,
          type: cc.Node
        },
        scoreDisplay: {
          default: null,
          type: cc.Label
        },
        btnPlay: {
          default: null,
          type: cc.Button
        },
        scoreAudio: {
          default: null,
          url: cc.AudioClip
        }
      },
      onLoad: function onLoad() {
        this.groundY = this.ground.y + this.ground.height / 2;
        this.timer = 0;
        this.starDuration = 0;
        this.spawnNewStar();
        this.score = 0;
      },
      spawnNewStar: function spawnNewStar() {
        var newStar = cc.instantiate(this.starPrefab);
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent("Star").game = this;
        this.starDuration = this.minStarDuration + cc.random0To1() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
      },
      getNewStarPosition: function getNewStarPosition() {
        var randX = 0;
        var randY = this.groundY + cc.random0To1() * this.player.getComponent("Player").jumpHeight + 50;
        var maxX = this.node.width / 2;
        randX = cc.randomMinus1To1() * maxX;
        return cc.p(randX, randY);
      },
      start: function start() {},
      update: function update(dt) {
        if (this.timer > this.starDuration) {
          this.gameOver();
          return;
        }
        this.timer += dt;
      },
      gameOver: function gameOver() {
        this.player.stopAllActions();
        cc.director.loadScene("game");
      },
      gainScore: function gainScore() {
        this.score += 1;
        this.scoreDisplay.string = "Score: " + this.score.toString();
        cc.audioEngine.playEffect(this.scoreAudio, false);
      }
    });
    cc._RF.pop();
  }, {} ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d37df+moaNCoZDeSrdO3itk", "Player");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        jumpHeight: 0,
        jumpDuration: 0,
        maxMoveSpeed: 0,
        accel: 0,
        jumpAudio: {
          default: null,
          url: cc.AudioClip
        },
        touch_left: {
          default: null,
          type: cc.Button
        },
        touch_right: {
          default: null,
          type: cc.Button
        }
      },
      setJumpAction: function setJumpAction() {
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        var callback = cc.callFunc(this.playJumpSound, this);
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
      },
      playJumpSound: function playJumpSound() {
        cc.audioEngine.playEffect(this.jumpAudio, false);
      },
      setInputControl: function setInputControl() {
        var self = this;
        cc.eventManager.addListener({
          event: cc.EventListener.KEYBOARD,
          onKeyPressed: function onKeyPressed(keyCode, event) {
            console.log(keyCode + "=====" + event);
            switch (keyCode) {
             case cc.KEY.a:
              self.accLeft = true;
              self.accRight = false;
              break;

             case cc.KEY.d:
              self.accLeft = false;
              self.accRight = true;
            }
          },
          onKeyReleased: function onKeyReleased(keyCode, event) {
            switch (keyCode) {
             case cc.KEY.a:
              self.accLeft = false;
              break;

             case cc.KEY.d:
              self.accRight = false;
            }
          }
        }, self.node);
      },
      touchCtrl: function touchCtrl() {
        var self = this;
        self.touch_left.node.on(cc.Node.EventType.TOUCH_START, function name(ev) {
          self.accLeft = true;
          self.accRight = false;
        });
        self.touch_left.node.on(cc.Node.EventType.TOUCH_END, function name(ev) {
          self.accLeft = false;
        });
        self.touch_right.node.on(cc.Node.EventType.TOUCH_START, function name(ev) {
          self.accRight = true;
          self.accLeft = false;
        });
        self.touch_right.node.on(cc.Node.EventType.TOUCH_END, function name(ev) {
          self.accRight = false;
        });
      },
      onLoad: function onLoad() {
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
        this.accLeft = false;
        this.accRight = false;
        this.xSpeed = 0;
        this.setInputControl();
        this.touchCtrl();
      },
      update: function update(dt) {
        this.accLeft ? this.xSpeed -= this.accel * dt : this.accRight && (this.xSpeed += this.accel * dt);
        Math.abs(this.xSpeed) > this.maxMoveSpeed && (this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed));
        this.node.x += this.xSpeed * dt;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  Star: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ee837oc+ixHj6OS34Yozujs", "Star");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        pickRadius: 0
      },
      onLoad: function onLoad() {},
      getPlayerDistance: function getPlayerDistance() {
        var playerPos = this.game.player.getPosition();
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
      },
      onPicked: function onPicked() {
        this.game.spawnNewStar();
        this.game.gainScore();
        this.node.destroy();
      },
      start: function start() {},
      update: function update(dt) {
        if (this.getPlayerDistance() < this.pickRadius) {
          this.onPicked();
          return;
        }
        var opacityRatio = 1 - this.game.timer / this.game.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Game", "Player", "Star" ]);