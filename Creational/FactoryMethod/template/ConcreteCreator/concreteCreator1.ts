import Creator  from '../AbstractCreator/creator'
import Product from '../abstractProduct/product'
import ConcreteProduct1 from '../concreteProduct/concreteProduct1'

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ConcreteCreator1 extends Creator {

    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1()
    }
}

export default ConcreteCreator1