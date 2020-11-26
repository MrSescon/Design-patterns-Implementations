/**
 * The Builder interface specifies methods for creating the different parts of
 * the Product objects.
 */
interface Builder {
    producePartA(): void
    producePartB(): void
    producePartC(): void
}

export default Builder
