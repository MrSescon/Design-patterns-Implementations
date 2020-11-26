// Usar o padrão Builder só faz sentido quando seus produtos são
// bem complexos e requerem configuração extensiva. Os dois
// produtos a seguir são relacionados, embora eles não tenham
// uma interface em comum.


// Cada carro deve ter um manual do usuário que corresponda
// a configuração do carro e descreva todas suas
// funcionalidades.
export default class Manual {
    public parts: string[] = []

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`)
    }
}