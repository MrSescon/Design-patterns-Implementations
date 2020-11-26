import Dialog from '../AbstractCreator/dialog'
import WindowsDialog from "../ConcreteCreators/windowsDialog"
import WebDialog from "../ConcreteCreators/webDialog"

// A aplicação seleciona um tipo de criador dependendo da
// configuração atual ou definições de ambiente.

class Application {
    private dialog: Dialog

    // A aplicação seleciona um tipo de criador dependendo da
    // configuração atual ou definições de ambiente.
    public initialize(){
        const config = this.readApplicationConfigFile()

        if (config.OS === 'Windows') {
            this.dialog = new WindowsDialog()
        } else if (config.OS === 'Web') {
            this.dialog = new WebDialog()
        } else
            throw 'Error!!! Unknown operating sytem.'

    }

    readApplicationConfigFile(){
        return {
            OS: 'Windows' || 'Web'
        }
    }

    // O código cliente trabalha com uma instância de um criador
    // concreto, ainda que com sua interface base. Desde que o
    // cliente continue trabalhando com a criadora através da
    // interface base, você pode passar qualquer subclasse da
    // criadora.
    main(){
        this.initialize()
        this.dialog.render()
    }
}
