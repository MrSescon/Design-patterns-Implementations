import Builder from '../abstractBuilder/builder'
import Car from '../products/car'
// As classes builder concretas seguem a interface do
// builder e fornecem implementações específicas das etapas
// de construção. Seu programa pode ter algumas variações de
// builders, cada uma implementada de forma diferente.
class CarBuilder implements Builder {

    private car: Car

    // Uma instância fresca do builder deve conter um objeto
    // produto em branco na qual ela usa para montagem futura.
    constructor() {
        this.reset()
    }

    // O método reset limpa o objeto sendo construído.
    public reset(): void {
        this.car = new Car()
    }

    // Todas as etapas de produção trabalham com a mesma
    // instância de produto.

    public setSeats(quantity: number): void {
        this.car.parts.push('Define o número de assentos no carro')
        this.car.seats = quantity
    }
    public setEngine(engine: string): void {
        this.car.parts.push('Instala um tipo de motor')
        this.car.engine = engine
    }
    public setTripComputer(hasTripComputer: boolean): void {
        this.car.parts.push('Instala um computador de bordo')
        this.car.hasTripComputer = hasTripComputer
    }
    public setGPS(hasGPS: boolean): void {
        this.car.parts.push('Instala um sistema de posicionamento global')
        this.car.hasGPS = hasGPS
    }

    // Builders concretos devem fornecer seus próprios
    // métodos para recuperar os resultados. Isso é porque
    // vários tipos de builders podem criar produtos
    // inteiramente diferentes que nem sempre seguem a mesma
    // interface. Portanto, tais métodos não podem ser
    // declarados na interface do builder (ao menos não em
    // uma linguagem de programação de tipo estático).
    //
    // Geralmente, após retornar o resultado final para o
    // cliente, espera-se que uma instância de builder comece
    // a produzir outro produto. É por isso que é uma prática
    // comum chamar o método reset no final do corpo do método
    // `getProduct`. Contudo este comportamento não é
    // obrigatório, e você pode fazer seu builder esperar por
    // uma chamada explícita do reset a partir do código cliente
    // antes de se livrar de seu resultado anterior.

    public getProduct(): Car {
        const result = this.car
        this.reset()
        return result
    }
}

export default CarBuilder
