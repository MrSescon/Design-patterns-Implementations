/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */

import Implementation from "../implementation/implementation";

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return `ConcreteImplementationB: Here's the result on the platarfom B.`
  }
}

export default ConcreteImplementationB