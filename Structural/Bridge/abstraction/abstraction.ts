import Implementation from '../implementation/implementation'
/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 */
class Abstraction {
  protected implementation: Implementation

  constructor(implementation: Implementation) {
    this.implementation = implementation
  }

  public operation(): string {
    const result = this.implementation.operationImplementation()
    return `Abstraction: Base operation with:\n${result}`
  }
}

export default Abstraction