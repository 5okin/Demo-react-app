// @ts-nocheck
'use client';
import React, { useState } from 'react';
import FilterPanel from './FilterPanel';


interface Props{
	data: string;
}

const HotelList = ({ data }: Props) => {
	//Renders he json file and handles state of filters
	
	const [filters, setFilters] = useState({
		allInclusive: false,
		bedBreakfast: false,
		halfBoard: false,
		roomOnly: false,
		stars: null,
		minPrice: null,
		maxPrice: null,
	});


	const handleClearFilters = () => {
		setFilters({
		  	allInclusive: false,
		  	bedBreakfast: false,
		  	halfBoard: false,
			roomOnly: false,
		  	stars: null,
		  	minPrice: null,
		  	maxPrice: null,
		});
	};
	
	// Manage state of filter checkboxes
	const handleFilterChange = (filter: null) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[filter]: !prevFilters[filter],
		}));
	};

	
	const handlePriceFilterChange = (min: null, max: null) => {
		setFilters((prevFilters) => {
			const isSameRange = prevFilters.minPrice === min && prevFilters.maxPrice === max;
	  
			return {
				...prevFilters,
				minPrice: isSameRange ? null : min,
				maxPrice: isSameRange ? null : max,
			};
		});
	};


	const handleStarFilterChange = (star: null) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			stars: prevFilters.stars === star ? null : star,
		}));
	};
	
	const filteredData = data.filter((hotel: { meal_plan: string; rating: any; price: number; }) => {
		// Apply filtering logic based on selected filters
		const mealPlanMatch =
			(!filters.allInclusive || hotel.meal_plan === 'All Inclusive') &&
			(!filters.bedBreakfast || hotel.meal_plan === 'Bed Breakfast') &&
			(!filters.halfBoard || hotel.meal_plan === 'Half Board') &&
			(!filters.roomOnly || hotel.meal_plan === 'Room Only');
		
		const starMatch =
			filters.stars === null || hotel.rating === filters.stars;

		const priceMatch =
			(filters.minPrice === null || hotel.price >= filters.minPrice) &&
			(filters.maxPrice === null || hotel.price <= filters.maxPrice);
	
		// If no filters are selected return everything
		if (
			!filters.allInclusive &&
			!filters.bedBreakfast &&
			!filters.halfBoard &&
		  	!filters.roomOnly &&
		  	filters.stars === null &&
		  	filters.minPrice === null &&
		  	filters.maxPrice === null
		) {
			return true;
		}
	
		// Include hotel only if it matches the selected filters
		return mealPlanMatch && starMatch && priceMatch;
	});

	// Stylized stars rating using unicode
	const starsRating = (rating: number) => {
	  	const blackStar = '\u2605'; // Unicode for black star
	 	const whiteStar = '\u2606'; // Unicode for white star
	  	const blackStars = blackStar.repeat(rating);
	  	const whiteStars = whiteStar.repeat(5 - rating);
	  	return blackStars + whiteStars;
	};

	
	return (
		// Render son file
		<div className="container mt-4">
			<div  className="NumberOfDeals float-right" style={{"paddingBottom": 10}}><b>{filteredData.length}</b> available</div>
			<div className="row gy-4">
				<div className="col-lg-3 col-md-5 ">
					<FilterPanel 
						filters={filters}
						onClearFilters={handleClearFilters}
						onFilterChange={handleFilterChange}
						onStarFilterChange={handleStarFilterChange}
						onPriceFilterChange={handlePriceFilterChange}
					/>
				</div>
				<div className="col-lg-9 col-md-7">
			  		<div className="row row-cols-1  row-cols-lg-3 g-3">
						{filteredData.map((hotel, index) => (
				  			<div key={index} className="col mb-4">
								<div className="card custom-card mx-auto">
									<img 
										src={`${hotel.photo}?${Math.random()}`} // To get random image
										className="card-img"
										alt={hotel.name}
									/>
									<div className="card-body d-flex flex-column shadow-lg">
										<div className="star-rating">{starsRating(hotel.rating)}</div>
										<p className="card-text">{hotel.meal_plan}</p>
										<h4 className="card-title">{hotel.name}</h4>
										<p className="card-text">{hotel.city}</p>
										<div className="d-flex justify-content-between align-items-end mt-auto">
											<p className="card-text text-left mb-2">ΑΠΟ <b>${hotel.price}</b></p>
											<a href="#" className="btn btn-primary">Book Now</a>
										</div>
									</div>
								</div>
				  			</div>
						))}
			  		</div>
				</div>
		  	</div>
		</div>
	);
};

export default function ApiClient({ data } : Props) {
	return (
		<HotelList data={data.data} />
	);
}