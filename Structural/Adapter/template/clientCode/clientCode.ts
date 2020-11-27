import Adapter from '../adapter/adapter'
import Adaptee from '../adaptee/adaptee';
import Target from '../Target/target'
/**
 * The client code supports all classes that follow the Target interface.
 */
function clientCode(target: Target) {
    console.log(target.request())
}

console.log('client: I can work just fine with the Target objects:')
const target = new Target();
clientCode(target)

console.log('')

const adaptee = new Adaptee()
console.log(`Client: The Adaptee class has a weird interface. See, I don't understand it: `);
console.log(`Adaptee: ${adaptee.specificRequest()}`)

console.log(`Client: But I can work with it via the Adapter: `)
const adapter = new Adapter(adaptee)
clientCode(adapter)
