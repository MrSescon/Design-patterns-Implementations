import Logistics  from '../AbstractCreator/Logistics'
import Transport from '../abstractProduct/transport'
import Truck from '../concreteProducts/truck'

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class RoadLogistcs extends Logistics {
    
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public createTransport(): Transport {
        return new Truck()
    }
}

export default RoadLogistcs
