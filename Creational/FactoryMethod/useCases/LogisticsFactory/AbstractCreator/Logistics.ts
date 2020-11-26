import Transport from '../abstractProduct/transport'

// A classe criadora declara o método fábrica que deve retornar
// um objeto de uma classe produto. As subclasses da criadora
// geralmente fornecem a implementação desse método.
abstract class Logistics {

    // A criadora também pode fornecer alguma implementação
    // padrão do Factory Method.
    public abstract createTransport(): Transport

    // Observe que, apesar do seu nome, a principal
    // responsabilidade da criadora não é criar produtos. Ela
    // geralmente contém alguma lógica de negócio central que
    // depende dos objetos produto retornados pelo método
    // fábrica. As subclasses pode mudar indiretamente essa
    // lógica de negócio ao sobrescreverem o método fábrica e
    // retornarem um tipo diferente de produto dele.
    public planDelivery(): void {
        // Chame o método fábrica para criar um objeto produto.
        const transport = this.createTransport()
        // Agora use o produto.
        transport.deliver()
    }
}

export default Dialog
