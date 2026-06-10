def on_player2_button_down_pressed():
    animation.run_image_animation(P2, assets.animation("""
        AquaDelante
        """), 50, True)
controller.player2.on_button_event(ControllerButton.DOWN,
    ControllerButtonEvent.PRESSED,
    on_player2_button_down_pressed)

def on_player1_button_right_pressed():
    animation.run_image_animation(P1,
        assets.animation("""
            MeguminDerecha
            """),
        70,
        True)
controller.player1.on_button_event(ControllerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_player1_button_right_pressed)

def on_player1_connected():
    P1.set_kind(SpriteKind.player)
    scene.camera_follow_sprite(P1)
    controller.player1.move_sprite(P1)
controller.player1.on_event(ControllerEvent.CONNECTED, on_player1_connected)

def on_player1_button_down_pressed():
    animation.run_image_animation(P1,
        assets.animation("""
            MeguminDelante
            """),
        50,
        True)
controller.player1.on_button_event(ControllerButton.DOWN,
    ControllerButtonEvent.PRESSED,
    on_player1_button_down_pressed)

def on_player2_button_left_pressed():
    animation.run_image_animation(P2,
        assets.animation("""
            AquaIzquierda
            """),
        90,
        True)
controller.player2.on_button_event(ControllerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_player2_button_left_pressed)

def on_player2_button_up_pressed():
    animation.run_image_animation(P2, assets.animation("""
        AquaDetras
        """), 50, True)
controller.player2.on_button_event(ControllerButton.UP,
    ControllerButtonEvent.PRESSED,
    on_player2_button_up_pressed)

def on_player3_connected():
    scene.camera_follow_sprite(P3)
    controller.player3.move_sprite(P3)
controller.player3.on_event(ControllerEvent.CONNECTED, on_player3_connected)

def on_player2_connected():
    scene.camera_follow_sprite(P2)
    controller.player2.move_sprite(P2)
controller.player2.on_event(ControllerEvent.CONNECTED, on_player2_connected)

def on_player1_button_left_pressed():
    animation.run_image_animation(P1,
        assets.animation("""
            MeguminIzquierda
            """),
        70,
        True)
controller.player1.on_button_event(ControllerButton.LEFT,
    ControllerButtonEvent.PRESSED,
    on_player1_button_left_pressed)

def on_player1_button_up_pressed():
    animation.run_image_animation(P1,
        assets.animation("""
            MeguminDetras
            """),
        70,
        True)
controller.player1.on_button_event(ControllerButton.UP,
    ControllerButtonEvent.PRESSED,
    on_player1_button_up_pressed)

def on_player4_connected():
    scene.camera_follow_sprite(P4)
    controller.player4.move_sprite(P4)
controller.player4.on_event(ControllerEvent.CONNECTED, on_player4_connected)

def on_player2_button_right_pressed():
    animation.run_image_animation(P2, assets.animation("""
        AquaDerecha
        """), 70, True)
controller.player2.on_button_event(ControllerButton.RIGHT,
    ControllerButtonEvent.PRESSED,
    on_player2_button_right_pressed)

P4: Sprite = None
P3: Sprite = None
P2: Sprite = None
P1: Sprite = None
tiles.set_current_tilemap(tilemap("""
    campo
    """))
P1 = sprites.create(assets.image("""
    Megumin
    """), SpriteKind.player)
P2 = sprites.create(assets.image("""
    Aqua
    """), SpriteKind.player)
P3 = sprites.create(assets.image("""
    Darknes
    """), SpriteKind.player)
P4 = sprites.create(assets.image("""
    miImagen
    """), SpriteKind.player)

def on_on_update():
    P1.set_velocity(0, 0)
    if controller.player1.is_pressed(ControllerButton.UP):
        pass
    elif controller.player1.is_pressed(ControllerButton.DOWN):
        pass
    elif controller.player1.is_pressed(ControllerButton.RIGHT):
        pass
    elif controller.player1.is_pressed(ControllerButton.LEFT):
        pass
    else:
        P1.set_image(assets.image("""
            Megumin
            """))
game.on_update(on_on_update)

def on_on_update2():
    P2.set_velocity(0, 0)
    if controller.player2.is_pressed(ControllerButton.UP):
        pass
    elif controller.player2.is_pressed(ControllerButton.DOWN):
        pass
    elif controller.player2.is_pressed(ControllerButton.RIGHT):
        pass
    elif controller.player2.is_pressed(ControllerButton.LEFT):
        pass
    else:
        P2.set_image(assets.image("""
            Aqua
            """))
game.on_update(on_on_update2)
