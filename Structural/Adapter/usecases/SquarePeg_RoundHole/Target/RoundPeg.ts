/**
 * The Target defines the domain-specific interface used by the client code.
 */

// Digamos que você tenha duas classes com interfaces
// compatíveis: RoundHole (Buraco Redondo) e RoundPeg (Pino
// Redondo).

class RoundPeg {
    private radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    // Retorna o raio do buraco.
    public getRadius() {
        return this.radius
    }

}

export default RoundPeg
