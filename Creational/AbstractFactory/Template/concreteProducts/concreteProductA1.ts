/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */

import AbstractProductA from "../abstractProducts/abstractProductA";
class ConcreteProductA1 implements AbstractProductA {

    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }

}

export default ConcreteProductA1;