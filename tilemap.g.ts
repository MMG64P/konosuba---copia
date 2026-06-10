// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "campo":
            case "nivel2":return tiles.createTilemap(hex`1000100002020202020202010101010101010101020101010101020202020202010101010201010101010101010101020201010102010101010101010101010102010101020101010101010101010101010201010201010101010101010101010102010102010101010101010101010101020101020101010202020202020101010102010201010102020202020201010101020102010101010101010101010101010201020101010101010101010101010102010201010101010101010101010101020102010101010101010101010101010201020101010101010101010101010202010201010101010102020202020202010102020202020202020101010202010101`, img`
2 2 2 2 2 2 2 . . . . . . . . . 
2 . . . . . 2 2 2 2 2 2 . . . . 
2 . . . . . . . . . . 2 2 . . . 
2 . . . . . . . . . . . 2 . . . 
2 . . . . . . . . . . . . 2 . . 
2 . . . . . . . . . . . . 2 . . 
2 . . . . . . . . . . . . 2 . . 
2 . . . 2 2 2 2 2 2 . . . . 2 . 
2 . . . 2 2 2 2 2 2 . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . 2 2 . 
2 . . . . . . 2 2 2 2 2 2 2 . . 
2 2 2 2 2 2 2 2 . . . 2 2 . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "flores":
            case "tile1":return tile1;
            case "miMosaico":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
