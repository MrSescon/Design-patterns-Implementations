import Management  from '../AbstractCreator/management'
import Maintenance from '../abstractProduct/maintenance'
import Automobile from '../concreteProducts/automobile'

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class RoadMaintenance extends Management {
    
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public createMaintenance(): Maintenance {
        return new Automobile()
    }
}

export default RoadMaintenance

