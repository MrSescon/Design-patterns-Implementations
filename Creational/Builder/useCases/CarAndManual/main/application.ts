import Director from '../director/director'
import CarBuilder from '../concreteBuilder/carBuilder'
import CarManualBuilder from '../concreteBuilder/carManualBuilder'
import Car from '../products/car'
import Manual from '../products/manual'


// O código cliente cria um objeto builder, passa ele para o
// diretor e então inicia o processo de construção. O resultado
// final é recuperado do objeto builder.
class Application {
    
    makeCar(): void{
        const director: Director = new Director()

        const builder: CarBuilder = new CarBuilder()
        director.constructSportsCar(builder)
        const car: Car = builder.getProduct()

        const Builder2:CarManualBuilder = new CarManualBuilder()
        director.constructSportsCar(builder)

        // O produto final é frequentemente retornado de um
        // objeto builder uma vez que o diretor não está
        // ciente e não é dependente de builders e produtos
        // concretos.
        const manual: Manual = builder.getProduct()
    }
}