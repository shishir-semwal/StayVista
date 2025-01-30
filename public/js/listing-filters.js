// public/js/listing-filters.js

document.addEventListener('DOMContentLoaded', function() {
    const applyFiltersBtn = document.getElementById('apply-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const activeFiltersDiv = document.getElementById('active-filters');
    const resultsCountDiv = document.getElementById('results-count');

    applyFiltersBtn.addEventListener('click', filterListings);
    clearFiltersBtn.addEventListener('click', clearFilters);

    function filterListings() {
        const minPrice = document.getElementById('min-price').value;
        const maxPrice = document.getElementById('max-price').value;
        const country = document.getElementById('country-select').value;
        
        const listings = document.querySelectorAll('.listing-link');
        let visibleCount = 0;
        
        listings.forEach(listing => {
            const priceText = listing.querySelector('.card-text').textContent;
            const listingPrice = parseInt(priceText.replace(/[^\d]/g, ''));
            const listingCountry = listing.querySelector('.listing-country').textContent;
            
            const matchesPrice = (!minPrice || listingPrice >= minPrice) && 
                                (!maxPrice || listingPrice <= maxPrice);
            const matchesCountry = !country || listingCountry.trim() === country.trim();
            
            const isVisible = matchesPrice && matchesCountry;
            listing.style.display = isVisible ? 'block' : 'none';
            
            if (isVisible) visibleCount++;
        });

        updateActiveFilters(minPrice, maxPrice, country);
        updateResultsCount(visibleCount);
    }

    function clearFilters() {
        document.getElementById('min-price').value = '';
        document.getElementById('max-price').value = '';
        document.getElementById('country-select').value = '';
        
        const listings = document.querySelectorAll('.listing-link');
        listings.forEach(listing => {
            listing.style.display = 'block';
        });

        activeFiltersDiv.innerHTML = '';
        updateResultsCount(listings.length);
    }

    function updateActiveFilters(minPrice, maxPrice, country) {
        activeFiltersDiv.innerHTML = '';
        
        if (minPrice || maxPrice) {
            const priceTag = document.createElement('div');
            priceTag.className = 'filter-tag';
            priceTag.innerHTML = `
                Price: ${minPrice || '0'} - ${maxPrice || '∞'}
                <span class="remove-filter" onclick="clearPriceFilter()">×</span>
            `;
            activeFiltersDiv.appendChild(priceTag);
        }

        if (country) {
            const countryTag = document.createElement('div');
            countryTag.className = 'filter-tag';
            countryTag.innerHTML = `
                Country: ${country}
                <span class="remove-filter" onclick="clearCountryFilter()">×</span>
            `;
            activeFiltersDiv.appendChild(countryTag);
        }
    }

    function updateResultsCount(count) {
        resultsCountDiv.textContent = `Showing ${count} listings`;
    }

    // Initialize results count
    updateResultsCount(document.querySelectorAll('.listing-link').length);
});

// Global functions for filter removal
window.clearPriceFilter = function() {
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    document.querySelector('#apply-filters').click();
}

window.clearCountryFilter = function() {
    document.getElementById('country-select').value = '';
    document.querySelector('#apply-filters').click();
}