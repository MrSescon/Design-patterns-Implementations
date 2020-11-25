
import AbstractFactory from "../abstractFactory";
import AbstractProductA from "../abstractProducts/abstractProductA";
import AbstractProductB from "../abstractProducts/abstractProductB";
import ConcreteProductA2 from '../concreteProducts/concreteProductA2';
import ConcreteProductB2 from '../concreteProducts/concreteProductB2';

/**
 * Each Concrete Factory has a corresponding product variant.
 */
class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

export default ConcreteFactory2;