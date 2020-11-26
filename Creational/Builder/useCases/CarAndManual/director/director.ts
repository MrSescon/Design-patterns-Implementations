import Builder from '../abstractBuilder/builder'

// O diretor é apenas responsável por executar as etapas de
// construção em uma sequência em particular. Isso ajuda quando
// produzindo produtos de acordo com uma ordem específica ou
// configuração. A rigor, a classe diretor é opcional, já que o
// cliente pode controlar os builders diretamente.
class Director {
    private builder: Builder

    // O diretor trabalha com qualquer instância builder que
    // o código cliente passar a ele. Dessa forma, o código
    // cliente pode alterar o tipo final do produto recém
    // montado.
    public setBuilder(builder: Builder): void {
        this.builder = builder
    }

    // O diretor pode construir diversas variações do produto
    // usando as mesmas etapas de construção.
    public constructSportsCar(builder: Builder): void {
        this.builder.reset()
        builder.setSeats(2)
        builder.setEngine('SportEngine')
        builder.setTripComputer(true)
        builder.setGPS(true)
    }

    public buildFullFeaturedProduct(): void {
        
    }

}

export default Director
