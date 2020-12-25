/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */

import Implementation from "../implementation/implementation";

 class ConcreteImplementationA implements Implementation {
   public operationImplementation(): string {
     return `ConcreteImplementationA: Here's the result on the platarfom A.`
   }
 }

 export default ConcreteImplementationA
 