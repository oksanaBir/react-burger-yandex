export interface IIngredient {
	id: string;
	name: string;
	type: 'bun' | 'main' | 'sauce';
	fat: number;
	calories: number;
	carbohydrates: number;
	proteins: number;
	image: string;
	image_large: string;
	image_mobile: string;
	price: number;
	_v: number;
	_id: string;
}