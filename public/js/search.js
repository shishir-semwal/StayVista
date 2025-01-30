// Get DOM elements
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const listingsContainer = document.getElementById('listings-container');
    const noResultsMessage = document.getElementById('no-results-message');
    const resultsCount = document.getElementById('results-count');

    // Function to perform search
    function performSearch(searchQuery) {
        const listings = document.querySelectorAll('.listing-link');
        let visibleCount = 0;

        searchQuery = searchQuery.toLowerCase().trim();

        listings.forEach(listing => {
            const title = listing.dataset.title.toLowerCase();
            const location = listing.dataset.location.toLowerCase();
            const country = listing.dataset.country.toLowerCase();
            
            // Check if listing matches search query
            const isMatch = title.includes(searchQuery) ||
                          location.includes(searchQuery) ||
                          country.includes(searchQuery);

            // Check if listing matches current filters
            const currentFilters = getActiveFilters();
            const matchesFilters = checkFilters(listing, currentFilters);

            // Show/hide listing based on both search and filters
            if (isMatch && matchesFilters) {
                listing.style.display = 'block';
                visibleCount++;
            } else {
                listing.style.display = 'none';
            }
        });

        // Update UI based on results
        updateResultsUI(visibleCount);
    }

    // Function to get current active filters
    function getActiveFilters() {
        return {
            minPrice: document.getElementById('min-price').value,
            maxPrice: document.getElementById('max-price').value,
            country: document.getElementById('country-select').value
        };
    }

    // Function to check if listing matches filters
    function checkFilters(listing, filters) {
        const price = parseFloat(listing.dataset.price);
        const country = listing.dataset.country;

        const matchesMinPrice = !filters.minPrice || price >= parseFloat(filters.minPrice);
        const matchesMaxPrice = !filters.maxPrice || price <= parseFloat(filters.maxPrice);
        const matchesCountry = !filters.country || country === filters.country;

        return matchesMinPrice && matchesMaxPrice && matchesCountry;
    }

    // Function to update UI with results
    function updateResultsUI(count) {
        if (count === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
        resultsCount.textContent = `Showing ${count} listings`;
    }

    // Event listeners
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        performSearch(searchInput.value);
    });

    // Integration with existing filter system
    const applyFiltersBtn = document.getElementById('apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            performSearch(searchInput.value);
        });
    }

    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            searchInput.value = '';
            performSearch('');
        });
    }
});