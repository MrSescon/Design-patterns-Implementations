import SquarePeg from '../adaptee/squarePeg'
import RoundPeg from '../Target/RoundPeg'


/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
// Uma classe adaptadora permite que você encaixe pinos
// quadrados em buracos redondos. Ela estende a classe RoundPeg
// para permitir que objetos do adaptador ajam como pinos
// redondos.
class SquarePegAdapter extends RoundPeg {
    // Na verdade, o adaptador contém uma instância da classe
    // SquarePeg.
    private peg: SquarePeg

    constructor(peg: SquarePeg) {
        super(peg.getWidth())
        this.peg = peg
    }

    // O adaptador finge que é um pino redondo com um raio
    // que encaixaria o pino quadrado que o adaptador está
    // envolvendo.
    public getRadius(): number {

        return this.peg.getWidth() * Math.sqrt(2) / 2
    }

}

export default SquarePegAdapter


