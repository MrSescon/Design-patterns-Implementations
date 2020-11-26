// A aplicação seleciona o tipo de fábrica dependendo da atual
// configuração do ambiente e cria o widget no tempo de execução
// (geralmente no estágio de inicialização).

import GUIFactory from '../../abstractFactory/guiFactory'
import {WinFactory, MacFactory} from '../../index'
import Application from '../application'
class ApplicationConfigurator {
    main(){
        const config = this.readApplicationConfigFile()
        let factory: GUIFactory
        if(config.OS == 'Windows' ) {
            factory = new WinFactory()
        } else if (config.OS == 'Mac') {
            factory = new MacFactory()
        } else {
            throw 'Error! Unknown operanting system' 
        }

        const App: Application = new Application(factory)

    }

    // retorna a atual configuração do ambiente
    readApplicationConfigFile(){
        return {
            OS: 'Windows' || 'Mac'
        }
    }
}