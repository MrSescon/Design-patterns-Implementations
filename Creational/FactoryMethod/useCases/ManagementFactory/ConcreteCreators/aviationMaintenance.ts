import Management  from '../AbstractCreator/management'
import Maintenance from '../abstractProduct/maintenance'
import Aircraft from '../concreteProducts/aircraft'

// Criadores concretos sobrescrevem o método fábrica para mudar
// o tipo de produto resultante.
class AviationMaintenance extends Management {

    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public createMaintenance(): Maintenance {
        return new Aircraft()
    }
}

export default AviationMaintenance


