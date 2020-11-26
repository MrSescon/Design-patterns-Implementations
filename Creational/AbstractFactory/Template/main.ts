/**
 * The client code can work with any concrete factory class.
 */
import clientCode from './Client/clientCode';
import ConcreteFactory1 from './concreteFactory/concreteFactory1'
import ConcreteFactory2 from './concreteFactory/concreteFactory2'

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());