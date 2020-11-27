import Target from '../Target/target'
import Adaptee from '../adaptee/adaptee'


/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    private adaptee: Adaptee

    constructor(adaptee: Adaptee) {
        super()
        this.adaptee = adaptee
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`
    }

}

export default Adapter
