import Logistics from '../AbstractCreator/Logistics'
import RoadLogistics from "../ConcreteCreators/roadLogistics"
import SeaLogistics from "../ConcreteCreators/SeaLogistics"

// A aplicação seleciona um tipo de criador dependendo da
// configuração atual ou definições de ambiente.

class Application {

    private logistics: Logistics

    // A aplicação seleciona um tipo de criador dependendo da
    // configuração atual ou definições de ambiente.
    public initialize(){
        const config = this.readApplicationConfigFile()

        if (config.types === 'RoadLogistics') {
            this.logistics = new RoadLogistics()
        } else if (config.types === 'SeaLogistics') {
            this.logistics = new SeaLogistics()
        } else
            throw 'Error!!! Unknown operating sytem.'

    }

    readApplicationConfigFile(){
        return {
            types: 'RoadLogistics' || 'SeaLogistics'
        }
    }

    // O código cliente trabalha com uma instância de um criador
    // concreto, ainda que com sua interface base. Desde que o
    // cliente continue trabalhando com a criadora através da
    // interface base, você pode passar qualquer subclasse da
    // criadora.
    main(){
        this.initialize()
        this.logistics.deliver()
    }
}
