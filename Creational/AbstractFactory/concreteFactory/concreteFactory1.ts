import AbstractFactory from "../abstractFactory";
import AbstractProductA from "../abstractProducts/abstractProductA";
import AbstractProductB from "../abstractProducts/abstractProductB";

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }

}

export default ConcreteFactory1;