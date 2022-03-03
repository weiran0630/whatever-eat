interface Location {
	lat: number;
	lng: number;
}

interface Northeast {
	lat: number;
	lng: number;
}

interface Southwest {
	lat: number;
	lng: number;
}

interface Viewport {
	northeast: Northeast;
	southwest: Southwest;
}

interface Geometry {
	location: Location;
	viewport: Viewport;
}

interface OpeningHours {
	open_now: boolean;
}

interface Photo {
	height: number;
	html_attributions: string[];
	photo_reference: string;
	width: number;
}

interface PlusCode {
	compound_code: string;
	global_code: string;
}

export interface Restaurant {
	business_status: string;
	geometry: Geometry;
	icon: string;
	icon_background_color: string;
	icon_mask_base_uri: string;
	name: string;
	opening_hours: OpeningHours;
	photos: Photo[];
	place_id: string;
	plus_code: PlusCode;
	price_level: number;
	rating: number;
	reference: string;
	scope: string;
	types: string[];
	user_ratings_total: number;
	vicinity: string;
}
