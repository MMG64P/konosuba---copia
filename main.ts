mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        assets.animation`MeguminDetras`,
        70,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`AquaDetras`,
        50,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        assets.animation`DarknesDetras`,
        70,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        assets.animation`MeguminDerecha`,
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
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Down)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`AquaDelante`,
        70,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Down)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        assets.animation`DarknesDelante`,
        70,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Down)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        assets.animation`MeguminDerecha`,
        70,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    P1.z = 10
    P2.z = 10
    P3.z = 0
    P4.z = 0
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
    if (controller.player4.isPressed(ControllerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        assets.animation`MeguminDerecha`,
        70,
        true
        )
    }
    if (controller.player4.isPressed(ControllerButton.Down)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        assets.animation`MeguminDerecha`,
        70,
        true
        )
    }
    if (controller.player4.isPressed(ControllerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        assets.animation`MeguminDerecha`,
        70,
        true
        )
    }
    if (controller.player4.isPressed(ControllerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        assets.animation`MeguminDerecha`,
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
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`AquaIzquierda`,
        70,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        assets.animation`myAnim0`,
        70,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        assets.animation`MeguminDerecha`,
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
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        animation.runImageAnimation(
        P2,
        assets.animation`myAnim2`,
        68,
        false
        )
        scene.cameraShake(8, 500)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
        animation.runImageAnimation(
        P3,
        assets.animation`myAnim4`,
        200,
        false
        )
        scene.cameraShake(8, 500)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        animation.runImageAnimation(
        P4,
        assets.animation`myAnim3`,
        200,
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
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        assets.animation`AquaDerecha`,
        70,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        assets.animation`myAnim`,
        70,
        true
        )
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        assets.animation`MeguminDerecha`,
        70,
        true
        )
    }
})
let P4: Sprite = null
let P3: Sprite = null
let P2: Sprite = null
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
P2 = sprites.create(img`
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
P3 = sprites.create(img`
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
P4 = sprites.create(img`
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
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Aqua`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`Darknes`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`miImagen`, SpriteKind.Player))
game.onUpdate(function () {
    P1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y - 30)
    P2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y - 30)
    P3.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y - 0)
    P4.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y - 0)
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
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setVelocity(0, 0)
    if (controller.player2.isPressed(ControllerButton.Up)) {
    	
    } else if (controller.player2.isPressed(ControllerButton.Down)) {
    	
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
    	
    } else if (controller.player2.isPressed(ControllerButton.Left)) {
    	
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`Aqua`)
    }
})
game.onUpdate(function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setVelocity(0, 0)
    if (controller.player3.isPressed(ControllerButton.Up)) {
    	
    } else if (controller.player3.isPressed(ControllerButton.Down)) {
    	
    } else if (controller.player3.isPressed(ControllerButton.Right)) {
    	
    } else if (controller.player3.isPressed(ControllerButton.Left)) {
    	
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setImage(assets.image`Darknes`)
    }
})
game.onUpdate(function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setVelocity(0, 0)
    if (controller.player4.isPressed(ControllerButton.Up)) {
    	
    } else if (controller.player4.isPressed(ControllerButton.Down)) {
    	
    } else if (controller.player4.isPressed(ControllerButton.Right)) {
    	
    } else if (controller.player4.isPressed(ControllerButton.Left)) {
    	
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setImage(assets.image`miImagen`)
    }
})
game.onUpdate(function () {
    if (controller.player1.isPressed(ControllerButton.Up) && controller.player1.isPressed(ControllerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Megumin`)
    }
    if (controller.player1.isPressed(ControllerButton.Right) && controller.player1.isPressed(ControllerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Megumin`)
    }
    if (controller.player2.isPressed(ControllerButton.Up) && controller.player2.isPressed(ControllerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`Aqua`)
    }
    if (controller.player2.isPressed(ControllerButton.Right) && controller.player2.isPressed(ControllerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`Aqua`)
    }
    if (controller.player3.isPressed(ControllerButton.Up) && controller.player3.isPressed(ControllerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setImage(assets.image`Darknes`)
    }
    if (controller.player3.isPressed(ControllerButton.Right) && controller.player3.isPressed(ControllerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setImage(assets.image`Darknes`)
    }
    if (controller.player4.isPressed(ControllerButton.Up) && controller.player4.isPressed(ControllerButton.Down)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setImage(assets.image`miImagen`)
    }
    if (controller.player4.isPressed(ControllerButton.Right) && controller.player4.isPressed(ControllerButton.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setImage(assets.image`miImagen`)
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
game.onUpdate(function () {
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x < scene.cameraProperty(CameraProperty.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(scene.cameraProperty(CameraProperty.Right), mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x > scene.cameraProperty(CameraProperty.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(scene.cameraProperty(CameraProperty.Left), mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y < scene.cameraProperty(CameraProperty.Top)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, scene.cameraProperty(CameraProperty.Bottom))
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y > scene.cameraProperty(CameraProperty.Bottom)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, scene.cameraProperty(CameraProperty.Top))
    }
})
game.onUpdate(function () {
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x < scene.cameraProperty(CameraProperty.Left)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(scene.cameraProperty(CameraProperty.Right), mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x > scene.cameraProperty(CameraProperty.Right)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(scene.cameraProperty(CameraProperty.Left), mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y < scene.cameraProperty(CameraProperty.Top)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, scene.cameraProperty(CameraProperty.Bottom))
    }
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y > scene.cameraProperty(CameraProperty.Bottom)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, scene.cameraProperty(CameraProperty.Top))
    }
})
