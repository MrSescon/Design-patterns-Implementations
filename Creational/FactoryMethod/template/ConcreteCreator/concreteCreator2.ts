import Creator  from '../AbstractCreator/creator'
import Product from '../abstractProduct/product'
import ConcreteProduct2 from '../concreteProduct/concreteProduct2'

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ConcreteCreator2 extends Creator {
    
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct2()
    }
}

export default ConcreteCreator2