import Abstraction from "../abstraction/abstraction"
import clientCode from "../clientCode/clientCode"

import ConcreteImplementationA from '../concreteImplementation/concreteImplementationA'
import ConcreteImplementationB from '../concreteImplementation/concreteImplementationB'
import ExtendedAbstraction from '../extendedAbstraction/extendedAbstraction'
/**
 * The client code should be able to work with any pre-configured abstraction-
 * implementation combination.
 */
let implementation = new ConcreteImplementationA()
let abstraction = new Abstraction(implementation)
clientCode(abstraction)

console.log('')

implementation = new ConcreteImplementationB()
abstraction = new ExtendedAbstraction(implementation)
clientCode(abstraction)