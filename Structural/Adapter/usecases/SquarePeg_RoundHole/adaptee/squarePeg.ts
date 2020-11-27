/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
// Mas tem uma classe incompatível: SquarePeg (Pino Quadrado).
class SquarePeg {

    private width: number

    constructor(width: number){
        this.width = width
    }

    // Retorna a largura do pino quadrado.
    public getWidth(): number {
        return this.width
    }
}

export default SquarePeg
