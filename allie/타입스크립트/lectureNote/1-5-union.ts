{

    /**
     * Union Types : OR
     */

    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    }
    move('down')

    type TileSize = 8 | 16 |32 ;
    

}