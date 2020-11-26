// A interface builder especifica métodos para criar as
// diferentes partes de objetos produto.
interface Builder {
    reset(): void
    setSeats(quantity: number): void
    setEngine(engine: string): void
    setTripComputer(hasTripComputer: boolean): void
    setGPS(hasGPS: boolean): void
}

export default Builder
