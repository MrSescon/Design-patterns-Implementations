import Builder from '../abstractBuilder/builder'
import Manual from '../products/manual'
// As classes builder concretas seguem a interface do
// builder e fornecem implementações específicas das etapas
// de construção. Seu programa pode ter algumas variações de
// builders, cada uma implementada de forma diferente.
class CarManualBuilder implements Builder {

    private manual: Manual

    // Uma instância fresca do builder deve conter um objeto
    // produto em branco na qual ela usa para montagem futura.
    constructor() {
        this.reset()
    }

    // O método reset limpa o objeto sendo construído.
    public reset(): void {
        this.manual = new Manual()
    }

    // Todas as etapas de produção trabalham com a mesma
    // instância de produto.

    public setSeats(): void {
        this.manual.parts.push('Documenta as funcionalidades do assento do carro')
    }
    public setEngine(): void {
        this.manual.parts.push('Adiciona instruções do motor')
    }
    public setTripComputer(): void {
        this.manual.parts.push('Adiciona instruções do computador de bordo')
    }
    public setGPS(): void {
        this.manual.parts.push('Adiciona instruções do GPS')
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

    public getProduct(): Manual {
        const result = this.manual
        this.reset()
        return result
    }
}

export default CarBuilder
