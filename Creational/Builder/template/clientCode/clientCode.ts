import Director from '../director/director'
import ConcreteBuilder1 from '../concreteBuilder/concreteBuilder1';

/**
 * The client code creates a builder object, passes it to the director and then
 * initiates the construction process. The end result is retrieved from the
 * builder object.
 */

function clientCode(director: Director) {
    const builder = new ConcreteBuilder1()
    director.setBuilder(builder)

    console.log('Standard basic product: ')
    director.buildMinimalViableProduct()
    builder.getProduct().listParts
    
    console.log('Standard full featured product: ')
    director.buildFullFeaturedProduct()
    builder.getProduct().listParts()

    // Remember, the Builder pattern can be used without a Director class.
    console.log('Custom product: ')
    builder.producePartA()
    builder.producePartC()
    builder.getProduct().listParts()
}

export default clientCode
