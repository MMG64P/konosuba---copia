mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminDetras`,
        70,
        true
        )
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Down)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminDelante`,
        50,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    P1.z = 10
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
    animation.stopAnimation(animation.AnimationTypes.All, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
    if (controller.player1.isPressed(ControllerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminDetras`,
        70,
        true
        )
    }
    if (controller.player1.isPressed(ControllerButton.Down)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminDelante`,
        50,
        true
        )
    }
    if (controller.player1.isPressed(ControllerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminIzquierda`,
        70,
        true
        )
    }
    if (controller.player1.isPressed(ControllerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminDerecha`,
        70,
        true
        )
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`AquaDetras`,
        50,
        true
        )
    }
    if (controller.player2.isPressed(ControllerButton.Down)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`AquaDelante`,
        70,
        true
        )
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`AquaIzquierda`,
        70,
        true
        )
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`AquaDerecha`,
        70,
        true
        )
    }
    if (controller.player3.isPressed(ControllerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        assets.animation`DarknesDetras`,
        70,
        true
        )
    }
    if (controller.player3.isPressed(ControllerButton.Down)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        assets.animation`DarknesDelante`,
        70,
        true
        )
    }
    if (controller.player3.isPressed(ControllerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        assets.animation`myAnim0`,
        70,
        true
        )
    }
    if (controller.player3.isPressed(ControllerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        assets.animation`myAnim`,
        70,
        true
        )
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminIzquierda`,
        70,
        true
        )
    }
})
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(74, 56)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        animation.runImageAnimation(
        P1,
        assets.animation`myAnim1`,
        68,
        false
        )
        scene.cameraShake(8, 500)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminDerecha`,
        70,
        true
        )
    }
})
let P1: Sprite = null
tiles.setCurrentTilemap(tilemap`campo`)
P1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let P2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let P3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let P4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Megumin`, SpriteKind.Player))
game.onUpdate(function () {
    P1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y - 30)
})
game.onUpdate(function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setVelocity(0, 0)
    if (controller.player1.isPressed(ControllerButton.Up)) {
    	
    } else if (controller.player1.isPressed(ControllerButton.Down)) {
    	
    } else if (controller.player1.isPressed(ControllerButton.Right)) {
    	
    } else if (controller.player1.isPressed(ControllerButton.Left)) {
    	
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Megumin`)
    }
})
game.onUpdate(function () {
    if (controller.player1.isPressed(ControllerButton.Up) && controller.player1.isPressed(ControllerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Megumin`)
    }
    if (controller.player1.isPressed(ControllerButton.Right) && controller.player1.isPressed(ControllerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Megumin`)
    }
})
game.onUpdate(function () {
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x < scene.cameraProperty(CameraProperty.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(scene.cameraProperty(CameraProperty.Right), mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x > scene.cameraProperty(CameraProperty.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(scene.cameraProperty(CameraProperty.Left), mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y < scene.cameraProperty(CameraProperty.Top)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, scene.cameraProperty(CameraProperty.Bottom))
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y > scene.cameraProperty(CameraProperty.Bottom)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, scene.cameraProperty(CameraProperty.Top))
    }
})
