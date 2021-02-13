export class AddressModel {
	constructor(
		public id: string,
		public city: string,
		public suburb: string,
		public country: string,
		public state: string,
		public street: string,
		public number: number,
		public zipCode: string,
		public typeAddress: string,
		public shortName: string
	){}
	
}
