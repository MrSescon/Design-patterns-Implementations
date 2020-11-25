import AbstractProductA from './abstractProducts/abstractProductA'
import AbstractProductB from './abstractProducts/abstractProductB'

export default interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}