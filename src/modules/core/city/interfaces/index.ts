import { ICountry } from '../../country/interfaces'

export interface ICity {
	name: string
}

export interface ICityWithCountry extends ICity {
	country: ICountry
}
