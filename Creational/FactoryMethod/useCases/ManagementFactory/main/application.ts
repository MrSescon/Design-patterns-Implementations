import Management from '../AbstractCreator/management'
import RoadMaintenance from "../ConcreteCreators/roadMaintenance"
import AviationMaintenance from '../ConcreteCreators/aviationMaintenance'

// A aplicação seleciona um tipo de criador dependendo da
// configuração atual ou definições de ambiente.

class Application {

    private management: Management

    // A aplicação seleciona um tipo de criador dependendo da
    // configuração atual ou definições de ambiente.
    public initialize(){
        const config = this.readApplicationConfigFile()

        if (config.types === 'RoadMaintenance') {
            this.management = new AviationMaintenance()
        } else if (config.types === 'AviationMaitenance') {
            this.management = new RoadMaintenance()
        } else
            throw 'Error!!! Unknown operating sytem.'

    }

    readApplicationConfigFile(){
        return {
            types: 'RoadMaintenance' || 'AviationMaintenance'
        }
    }

    // O código cliente trabalha com uma instância de um criador
    // concreto, ainda que com sua interface base. Desde que o
    // cliente continue trabalhando com a criadora através da
    // interface base, você pode passar qualquer subclasse da
    // criadora.
    main(){
        this.initialize()
        this.management.maintenancePlan()
    }
}
