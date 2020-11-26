import AbstractFactory from "../abstractFactory";
import AbstractProductA from "../abstractProducts/abstractProductA";
import AbstractProductB from "../abstractProducts/abstractProductB";
import ConcreteProductA1 from '../concreteProducts/concreteProductA1';
import ConcreteProductB1 from '../concreteProducts/concreteProductB1';

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */

class ConcreteFactory1 implements AbstractFactory {

    /**
     * Each Concrete Factory has a corresponding product variant.
     */
    
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }

}

export default ConcreteFactory1;