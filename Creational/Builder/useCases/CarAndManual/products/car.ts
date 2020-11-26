// Usar o padrão Builder só faz sentido quando seus produtos são
// bem complexos e requerem configuração extensiva. Os dois
// produtos a seguir são relacionados, embora eles não tenham
// uma interface em comum.


// Um carro pode ter um GPS, computador de bordo, e alguns
// assentos. Diferentes modelos de carros (esportivo, SUV,
// conversível) podem ter diferentes funcionalidades
// instaladas ou equipadas.
class Car {
    public parts: string[] = []
    public seats: number
    public engine: string
    public hasTripComputer: boolean
    public hasGPS: boolean
    
    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`)
    }
}

export default Car

