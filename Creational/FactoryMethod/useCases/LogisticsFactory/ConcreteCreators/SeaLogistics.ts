import Logistics  from '../AbstractCreator/Logistics'
import Transport from '../abstractProduct/transport'
import Ship from '../concreteProducts/Ship'

// Criadores concretos sobrescrevem o método fábrica para mudar
// o tipo de produto resultante.
class SeaLogistics extends Logistics {

    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public createTransport(): Transport {
        return new Ship()
    }
}

export default SeaLogistics

