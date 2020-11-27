import Adapter from '../adapter/SquarePegAdapter'
import Adaptee from '../adaptee/squarePeg';
import Target from '../Target/RoundHole'
import RoundHole from '../Target/RoundHole';
import RoundPeg from '../Target/RoundPeg';
import SquarePeg from '../adaptee/squarePeg';
import SquarePegAdapter from '../adapter/SquarePegAdapter';
/**
 * The client code supports all classes that follow the Target interface.
 */

 // Em algum lugar no código cliente.
const roundHole = new RoundHole(5)
const roundPeg = new RoundPeg(5)

// true
roundHole.fits(roundPeg)

const smallSquarePeg = new SquarePeg(5)
const largeSquarePeg = new SquarePeg(10)

// Isso não vai compilar (tipos incompatíveis).
// roundHole.fits(smallSquarePeg)

const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg)
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg)

//true
roundHole.fits(smallSquarePegAdapter)
//false
roundHole.fits(largeSquarePegAdapter)




