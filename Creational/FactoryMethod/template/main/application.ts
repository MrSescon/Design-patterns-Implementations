import clientCode from "../clienteCode/clientCode"
import ConcreteCreator1 from "../ConcreteCreator/concreteCreator1"
import ConcreteCreator2 from "../ConcreteCreator/concreteCreator2"

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: launched with the ConcreteCreator1.')
clientCode(new ConcreteCreator1())
console.log('')

console.log('App: Launched with the ConcreteCreator2')
clientCode(new ConcreteCreator2())
