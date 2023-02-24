export interface IProduct {
    id: number
    name: string
    colors: IProductColors[]
}

export interface IProductColors {
    id: number
    name: string
    images: string[]
    price: string
    description: string
    sizes: number[]
}

export interface IProductsState {
    loading: boolean
    products: IProduct[] | null
    currentProduct: IProduct | null
    sizes: ISize[] | null
}

export interface ISize {
    id: number
    label: string
    number: number
}