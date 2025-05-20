/**
 * Theme Customizer - Font and Color Selection
 * For iVALT website demo selection
 */

// Define font options
const fontOptions = [
    { name: 'Poppins', value: "'Poppins', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
    { name: 'Roboto', value: "'Roboto', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' },
    { name: 'Open Sans', value: "'Open Sans', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap' },
    { name: 'Montserrat', value: "'Montserrat', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap' },
    { name: 'Lato', value: "'Lato', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap' },
    { name: 'Inter', value: "'Inter', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
];

// Define brand color options from logo
const brandColors = {
    primary: {
        teal: '#30B68E', // Shield color
        navy: '#1E4884'   // Text color
    },
    secondary: {
        lightTeal: '#4DD8AD',
        darkNavy: '#0F3366',
        midBlue: '#3A6EC1',
        white: '#FFFFFF'
    }
};

// Function to create and inject the font selector UI
function injectFontSelector() {
    if (document.getElementById('font-selector-container')) {
        return; // Already exists
    }

    // Create container
    const container = document.createElement('div');
    container.id = 'font-selector-container';
    container.className = 'fixed top-0 right-0 bg-white p-4 shadow-lg z-50 rounded-bl-lg';
    container.style.maxWidth = '300px';

    // Create heading
    const heading = document.createElement('h3');
    heading.textContent = 'Customize Theme';
    heading.className = 'text-lg font-semibold mb-3';

    // Create font selector
    const fontLabel = document.createElement('p');
    fontLabel.textContent = 'Select Font:';
    fontLabel.className = 'text-sm font-medium mb-2';

    const fontSelect = document.createElement('select');
    fontSelect.id = 'font-selector';
    fontSelect.className = 'block w-full p-2 border border-gray-300 rounded mb-4';
    
    // Add font options
    fontOptions.forEach((font, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = font.name;
        fontSelect.appendChild(option);
    });

    // Add color theme selector
    const colorLabel = document.createElement('p');
    colorLabel.textContent = 'Primary Color:';
    colorLabel.className = 'text-sm font-medium mb-2';

    const colorButtons = document.createElement('div');
    colorButtons.className = 'flex space-x-2 mb-4';

    // Add teal option
    const tealBtn = document.createElement('button');
    tealBtn.className = 'w-8 h-8 rounded-full border border-gray-300';
    tealBtn.style.backgroundColor = brandColors.primary.teal;
    tealBtn.dataset.color = 'teal';
    tealBtn.title = 'Teal';

    // Add navy option
    const navyBtn = document.createElement('button');
    navyBtn.className = 'w-8 h-8 rounded-full border border-gray-300';
    navyBtn.style.backgroundColor = brandColors.primary.navy;
    navyBtn.dataset.color = 'navy';
    navyBtn.title = 'Navy';

    // Add custom color input
    const customColorContainer = document.createElement('div');
    customColorContainer.className = 'mb-4';
    
    const customColorLabel = document.createElement('p');
    customColorLabel.textContent = 'Custom Color:';
    customColorLabel.className = 'text-sm font-medium mb-2';
    
    const customColorInput = document.createElement('input');
    customColorInput.type = 'color';
    customColorInput.id = 'custom-color-picker';
    customColorInput.className = 'block w-full';
    customColorInput.value = brandColors.primary.teal;

    // Apply button
    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply Changes';
    applyButton.className = 'w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700';

    // Add toggle button to show/hide the panel
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Customize';
    toggleBtn.className = 'fixed top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded shadow z-50';
    toggleBtn.id = 'customizer-toggle';
    document.body.appendChild(toggleBtn);

    // Initial state
    container.style.display = 'none';
    
    // Assemble the UI
    colorButtons.appendChild(tealBtn);
    colorButtons.appendChild(navyBtn);
    
    customColorContainer.appendChild(customColorLabel);
    customColorContainer.appendChild(customColorInput);
    
    container.appendChild(heading);
    container.appendChild(fontLabel);
    container.appendChild(fontSelect);
    container.appendChild(colorLabel);
    container.appendChild(colorButtons);
    container.appendChild(customColorContainer);
    container.appendChild(applyButton);
    
    document.body.appendChild(container);

    // Load all fonts upfront
    fontOptions.forEach(font => {
        const linkEl = document.createElement('link');
        linkEl.rel = 'stylesheet';
        linkEl.href = font.url;
        document.head.appendChild(linkEl);
    });

    // Event listeners
    toggleBtn.addEventListener('click', () => {
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
    });

    tealBtn.addEventListener('click', () => {
        updateThemeColor(brandColors.primary.teal);
        customColorInput.value = brandColors.primary.teal;
    });

    navyBtn.addEventListener('click', () => {
        updateThemeColor(brandColors.primary.navy);
        customColorInput.value = brandColors.primary.navy;
    });

    customColorInput.addEventListener('change', () => {
        updateThemeColor(customColorInput.value);
    });

    fontSelect.addEventListener('change', () => {
        const selectedFont = fontOptions[fontSelect.value];
        updateFontFamily(selectedFont.value);
    });

    applyButton.addEventListener('click', () => {
        const selectedFont = fontOptions[fontSelect.value];
        updateFontFamily(selectedFont.value);
        updateThemeColor(customColorInput.value);
        alert('Theme applied! Font: ' + selectedFont.name);
    });
}

// Function to update font family across the site
function updateFontFamily(fontFamily) {
    document.documentElement.style.setProperty('--font-family', fontFamily);
    document.body.style.fontFamily = fontFamily;
    
    // Update all headings and text elements
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, input, select, textarea, label, span, div');
    elements.forEach(el => {
        el.style.fontFamily = fontFamily;
    });
}

// Function to update primary color across the site
function updateThemeColor(color) {
    // Update primary color
    document.documentElement.style.setProperty('--primary-color', color);
    
    // Find and update elements with primary color
    // Buttons
    const primaryButtons = document.querySelectorAll('.bg-primary, .bg-secondary, [class*="bg-blue"], [class*="bg-teal"], [class*="bg-green"]');
    primaryButtons.forEach(el => {
        if (!el.classList.contains('custom-ignore')) {
            el.style.backgroundColor = color;
        }
    });
    
    // Text
    const primaryText = document.querySelectorAll('.text-primary, .text-secondary, [class*="text-blue"], [class*="text-teal"], [class*="text-green"]');
    primaryText.forEach(el => {
        if (!el.classList.contains('custom-ignore')) {
            el.style.color = color;
        }
    });
    
    // Borders
    const primaryBorders = document.querySelectorAll('.border-primary, .border-secondary, [class*="border-blue"], [class*="border-teal"], [class*="border-green"]');
    primaryBorders.forEach(el => {
        if (!el.classList.contains('custom-ignore')) {
            el.style.borderColor = color;
        }
    });
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', function() {
    // Add custom CSS variables
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --font-family: 'Poppins', sans-serif;
            --primary-color: ${brandColors.primary.teal};
        }
    `;
    document.head.appendChild(style);
    
    // Inject the font selector
    injectFontSelector();
});
