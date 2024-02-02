// @ts-nocheck
//Filters setup

interface FilterPanelProps {
	filters: {
		allInclusive: boolean;
		bedBreakfast: boolean;
		halfBoard: boolean;
		roomOnly: boolean;
		minPrice: number;
		maxPrice: number;
		stars: number;
	};
	onFilterChange: (filterId: string) => void;
	onClearFilters: () => void;
	onStarFilterChange: (stars: number) => void;
	onPriceFilterChange: (minPrice: number, maxPrice: number) => void;
  }


const FilterPanel = ({ filters, onFilterChange, onClearFilters, onStarFilterChange, onPriceFilterChange }:FilterPanelProps) => {
	
	const filterOptions = [
		{ id: 'allInclusive', label: 'All Inclusive' },
		{ id: 'bedBreakfast', label: 'Bed & Breakfast' },
		{ id: 'halfBoard', label: 'Half Board' },
		{ id: 'roomOnly', label: 'Room Only' },
  	];


	const priceRanges = [
		{ min: 0, max: 200, label:  'Έως 200€' },
		{ min: 200, max: 300, label: '200-300€' },
		{ min: 300, max: Infinity, label: 'Από 300€ και άνω'},
	];

	// Render filter panel
	return (
		<div className="filter-panel shadow-lg rounded p-4 " style={{ opacity: .9, backgroundColor: 'white' }}>
			<div className="d-flex justify-content-between align-items-center mb-3 fts">
				<h3 className="mb-0 filter-title">ΦΙΛΤΡΑ</h3>
				<button className="btn btn-secondary" onClick={onClearFilters}>Clear</button>
			</div>

			{/* Price Filter */}

			<label className="form-check-label mb-0 filter-sub-title">Έυρος Τιμής:</label>

			{priceRanges.map(({ min, max, label }) => (
				<div className="form-check" key={`${min}-${max}`}>
				<input
					type="checkbox"
					className="form-check-input"
					id={`priceFilter${min}-${max}`}
					checked={filters.minPrice === min && filters.maxPrice === max}
					onChange={() => onPriceFilterChange(min, max)}
				/>
				<label className="form-check-label" htmlFor={`priceFilter${min}-${max}`}>
					{label}
				</label>
			</div>
			))}

			{/* Meal Plan Filter */}

			<hr className="my-3" /> 
			<label className="form-check-label mb-0 filter-sub-title">Meal Plan:</label>
			{filterOptions.map(({ id, label }) => (
				<div className="form-check" key={id}>
					<input
						type="checkbox"
						className="form-check-input"
						id={id}
						checked={filters[id]}
						onChange={() => onFilterChange(id)}
					/>
					<label className="form-check-label" htmlFor={id}>
						{label}
					</label>
				</div>
			))}

			{/* Stars Filter */}

			<hr className="my-3" /> 
			<label className="form-check-label mb-0 filter-sub-title">Stars:</label>
			{[0, 1, 2, 3, 4, 5].map((star) => (
				<div className="form-check" key={star}>
					<input
						type="checkbox"
						className="form-check-input"
						id={`starFilter${star}`}
						checked={filters.stars === star}
						onChange={() => onStarFilterChange(star)}
					/>
					<label className="form-check-label" htmlFor={`starFilter${star}`}>
						{`${star} Star${star > 1 ? 's' : ''}`}
					</label>
				</div>
			))}
		</div>
  	);
};

export default FilterPanel;
