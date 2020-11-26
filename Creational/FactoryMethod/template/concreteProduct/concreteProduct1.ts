/**
 * Concrete Products provide various implementations of the Product interface.
 */

import Product from "../abstractProduct/product";

 class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}'
    }
 }

 export default ConcreteProduct1
 