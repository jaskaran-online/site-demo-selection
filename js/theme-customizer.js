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
    { name: 'Inter', value: "'Inter', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
    { name: 'Raleway', value: "'Raleway', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap' },
    { name: 'Nunito', value: "'Nunito', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap' },
    { name: 'Merriweather', value: "'Merriweather', serif", url: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap' },
    { name: 'Playfair Display', value: "'Playfair Display', serif", url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap' },
    { name: 'Source Sans Pro', value: "'Source Sans Pro', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap' },
    { name: 'Quicksand', value: "'Quicksand', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap' },
    { name: 'Manrope', value: "'Manrope', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap' },
    { name: 'Work Sans', value: "'Work Sans', sans-serif", url: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap' }
];

// Define brand color options from logo
const brandColors = {
    primary: {
        teal: '#30B68E', // Shield color
        navy: '#1E4884',  // Text color
        lightTeal: '#4DD8AD',
        darkNavy: '#0F3366',
        midBlue: '#3A6EC1',
        emerald: '#10B981',
        indigo: '#4F46E5',
        purple: '#8B5CF6',
        rose: '#F43F5E',
        amber: '#F59E0B'
    },
    variations: {
        light: {
            teal: '#B3EBDC',
            navy: '#B7C5D9',
            emerald: '#D1FAE5',
            indigo: '#E0E7FF',
            purple: '#E9D5FF',
            rose: '#FECDD3',
            amber: '#FDE68A'
        },
        dark: {
            teal: '#0F766E',
            navy: '#0F2C5A',
            emerald: '#065F46',
            indigo: '#3730A3',
            purple: '#6B21A8',
            rose: '#BE123C',
            amber: '#B45309'
        }
    },
    neutral: {
        white: '#FFFFFF',
        gray50: '#F9FAFB',
        gray100: '#F3F4F6',
        gray200: '#E5E7EB',
        gray300: '#D1D5DB',
        gray400: '#9CA3AF',
        gray500: '#6B7280',
        gray600: '#4B5563',
        gray700: '#374151',
        gray800: '#1F2937',
        gray900: '#111827'
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
    container.className = 'fixed top-0 right-0 bg-white p-4 shadow-lg z-50 rounded-bl-lg transition-all duration-300';
    container.style.maxWidth = '350px';
    container.style.maxHeight = '80vh';
    container.style.overflow = 'auto';

    // Create heading
    const heading = document.createElement('h3');
    heading.textContent = 'Theme Customizer';
    heading.className = 'text-lg font-semibold mb-3 pb-2 border-b';

    // Create tabs for organization
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'mb-4 border-b';
    
    const fontTab = document.createElement('button');
    fontTab.textContent = 'Fonts';
    fontTab.className = 'px-4 py-2 font-medium text-gray-800 border-b-2 border-blue-500';
    fontTab.dataset.tab = 'fonts';
    
    const colorTab = document.createElement('button');
    colorTab.textContent = 'Colors';
    colorTab.className = 'px-4 py-2 font-medium text-gray-400 hover:text-gray-800';
    colorTab.dataset.tab = 'colors';

    const presetTab = document.createElement('button');
    presetTab.textContent = 'Presets';
    presetTab.className = 'px-4 py-2 font-medium text-gray-400 hover:text-gray-800';
    presetTab.dataset.tab = 'presets';
    
    tabsContainer.appendChild(fontTab);
    tabsContainer.appendChild(colorTab);
    tabsContainer.appendChild(presetTab);

    // Font tab content
    const fontContent = document.createElement('div');
    fontContent.id = 'fonts-tab';
    fontContent.className = 'tab-content';
    
    const fontLabel = document.createElement('p');
    fontLabel.textContent = 'Font Family:';
    fontLabel.className = 'text-sm font-medium mb-2';

    // Create font select with preview
    const fontSelect = document.createElement('select');
    fontSelect.id = 'font-selector';
    fontSelect.className = 'block w-full p-2 border border-gray-300 rounded mb-4';
    
    // Add font options
    fontOptions.forEach((font, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = font.name;
        option.style.fontFamily = font.value;
        fontSelect.appendChild(option);
    });

    // Font preview section
    const fontPreview = document.createElement('div');
    fontPreview.className = 'p-3 border border-gray-200 rounded mb-4';
    fontPreview.id = 'font-preview';
    
    const previewHeading = document.createElement('p');
    previewHeading.textContent = 'Font Preview';
    previewHeading.className = 'text-sm font-medium mb-2';
    
    const previewTitle = document.createElement('p');
    previewTitle.textContent = 'Heading Text';
    previewTitle.className = 'text-xl font-semibold mb-1';
    previewTitle.id = 'preview-title';
    
    const previewBody = document.createElement('p');
    previewBody.textContent = 'This is a paragraph of text that demonstrates how body text will look with this font. The quick brown fox jumps over the lazy dog.';
    previewBody.className = 'text-sm text-gray-600';
    previewBody.id = 'preview-body';
    
    fontPreview.appendChild(previewHeading);
    fontPreview.appendChild(previewTitle);
    fontPreview.appendChild(previewBody);
    
    // Font weight
    const fontWeightLabel = document.createElement('p');
    fontWeightLabel.textContent = 'Font Weight:';
    fontWeightLabel.className = 'text-sm font-medium mb-2';

    const fontWeightSelect = document.createElement('select');
    fontWeightSelect.id = 'font-weight-selector';
    fontWeightSelect.className = 'block w-full p-2 border border-gray-300 rounded mb-4';
    
    // Add weight options
    const weights = [
        { name: 'Light', value: '300' },
        { name: 'Regular', value: '400' },
        { name: 'Medium', value: '500' },
        { name: 'Semi-Bold', value: '600' },
        { name: 'Bold', value: '700' }
    ];
    
    weights.forEach((weight) => {
        const option = document.createElement('option');
        option.value = weight.value;
        option.textContent = weight.name;
        if (weight.value === '400') option.selected = true;
        fontWeightSelect.appendChild(option);
    });

    // Assemble font section
    fontContent.appendChild(fontLabel);
    fontContent.appendChild(fontSelect);
    fontContent.appendChild(fontPreview);
    fontContent.appendChild(fontWeightLabel);
    fontContent.appendChild(fontWeightSelect);

    // Color tab content
    const colorContent = document.createElement('div');
    colorContent.id = 'colors-tab';
    colorContent.className = 'tab-content hidden';
    
    // Primary color selector
    const primaryColorLabel = document.createElement('p');
    primaryColorLabel.textContent = 'Primary Color:';
    primaryColorLabel.className = 'text-sm font-medium mb-2';

    // iVALT palette selector
    const ivaltPaletteLabel = document.createElement('p');
    ivaltPaletteLabel.textContent = 'iVALT Brand Colors:';
    ivaltPaletteLabel.className = 'text-xs text-gray-500 mb-2';

    const ivaltButtons = document.createElement('div');
    ivaltButtons.className = 'grid grid-cols-5 gap-2 mb-4';

    // Add brand color buttons
    ['teal', 'navy', 'lightTeal', 'darkNavy', 'midBlue'].forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'w-full h-8 rounded border border-gray-300';
        btn.style.backgroundColor = brandColors.primary[color];
        btn.dataset.color = color;
        btn.title = color.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        ivaltButtons.appendChild(btn);
    });

    // Additional colors palette
    const additionalColorsLabel = document.createElement('p');
    additionalColorsLabel.textContent = 'Additional Colors:';
    additionalColorsLabel.className = 'text-xs text-gray-500 mb-2';

    const additionalButtons = document.createElement('div');
    additionalButtons.className = 'grid grid-cols-5 gap-2 mb-4';

    // Add additional color buttons
    ['emerald', 'indigo', 'purple', 'rose', 'amber'].forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'w-full h-8 rounded border border-gray-300';
        btn.style.backgroundColor = brandColors.primary[color];
        btn.dataset.color = color;
        btn.title = color.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        additionalButtons.appendChild(btn);
    });

    // Custom color with preview
    const customColorSection = document.createElement('div');
    customColorSection.className = 'mb-4 p-3 border border-gray-200 rounded';
    
    const customColorLabel = document.createElement('p');
    customColorLabel.textContent = 'Custom Color:';
    customColorLabel.className = 'text-sm font-medium mb-2';
    
    const customColorRow = document.createElement('div');
    customColorRow.className = 'flex items-center space-x-3';
    
    const customColorInput = document.createElement('input');
    customColorInput.type = 'color';
    customColorInput.id = 'custom-color-picker';
    customColorInput.className = 'h-8 w-16';
    customColorInput.value = brandColors.primary.teal;
    
    const customColorHex = document.createElement('input');
    customColorHex.type = 'text';
    customColorHex.id = 'custom-color-hex';
    customColorHex.className = 'flex-1 p-2 border border-gray-300 rounded text-sm';
    customColorHex.value = brandColors.primary.teal;
    customColorHex.placeholder = 'Hex color code';
    
    customColorRow.appendChild(customColorInput);
    customColorRow.appendChild(customColorHex);
    
    const colorPreview = document.createElement('div');
    colorPreview.className = 'mt-3 grid grid-cols-3 gap-2';
    colorPreview.id = 'color-preview';
    
    // Create color preview boxes (main, dark, light)
    const mainColorPreview = document.createElement('div');
    mainColorPreview.className = 'h-12 rounded';
    mainColorPreview.style.backgroundColor = brandColors.primary.teal;
    mainColorPreview.id = 'main-color-preview';
    
    const darkColorPreview = document.createElement('div');
    darkColorPreview.className = 'h-12 rounded';
    darkColorPreview.style.backgroundColor = brandColors.variations.dark.teal;
    darkColorPreview.id = 'dark-color-preview';
    
    const lightColorPreview = document.createElement('div');
    lightColorPreview.className = 'h-12 rounded';
    lightColorPreview.style.backgroundColor = brandColors.variations.light.teal;
    lightColorPreview.id = 'light-color-preview';
    
    const mainLabel = document.createElement('p');
    mainLabel.className = 'text-xs text-center mt-1';
    mainLabel.textContent = 'Primary';
    
    const darkLabel = document.createElement('p');
    darkLabel.className = 'text-xs text-center mt-1';
    darkLabel.textContent = 'Dark';
    
    const lightLabel = document.createElement('p');
    lightLabel.className = 'text-xs text-center mt-1';
    lightLabel.textContent = 'Light';
    
    const previewMain = document.createElement('div');
    previewMain.appendChild(mainColorPreview);
    previewMain.appendChild(mainLabel);
    
    const previewDark = document.createElement('div');
    previewDark.appendChild(darkColorPreview);
    previewDark.appendChild(darkLabel);
    
    const previewLight = document.createElement('div');
    previewLight.appendChild(lightColorPreview);
    previewLight.appendChild(lightLabel);
    
    colorPreview.appendChild(previewMain);
    colorPreview.appendChild(previewDark);
    colorPreview.appendChild(previewLight);
    
    customColorSection.appendChild(customColorLabel);
    customColorSection.appendChild(customColorRow);
    customColorSection.appendChild(colorPreview);

    // Assemble color section
    colorContent.appendChild(primaryColorLabel);
    colorContent.appendChild(ivaltPaletteLabel);
    colorContent.appendChild(ivaltButtons);
    colorContent.appendChild(additionalColorsLabel);
    colorContent.appendChild(additionalButtons);
    colorContent.appendChild(customColorSection);

    // Presets tab content
    const presetContent = document.createElement('div');
    presetContent.id = 'presets-tab';
    presetContent.className = 'tab-content hidden';
    
    const presetLabel = document.createElement('p');
    presetLabel.textContent = 'Theme Presets:';
    presetLabel.className = 'text-sm font-medium mb-3';
    
    const presetGrid = document.createElement('div');
    presetGrid.className = 'grid grid-cols-1 gap-3 mb-4';
    
    // Create presets
    const presets = [
        { name: 'iVALT Teal', font: 'Poppins', color: brandColors.primary.teal },
        { name: 'iVALT Navy', font: 'Poppins', color: brandColors.primary.navy },
        { name: 'Modern Minimalist', font: 'Inter', color: '#374151' },
        { name: 'Corporate Blue', font: 'Roboto', color: '#2563EB' },
        { name: 'Creative Purple', font: 'Montserrat', color: '#8B5CF6' },
        { name: 'Elegant Serif', font: 'Merriweather', color: '#1F2937' }
    ];
    
    presets.forEach((preset, index) => {
        const presetBtn = document.createElement('button');
        presetBtn.className = 'text-left p-3 border border-gray-200 rounded hover:border-blue-500 transition-colors';
        presetBtn.dataset.preset = index;
        
        const presetName = document.createElement('p');
        presetName.textContent = preset.name;
        presetName.className = 'font-medium';
        presetName.style.fontFamily = fontOptions.find(f => f.name === preset.font).value;
        
        const presetDetails = document.createElement('div');
        presetDetails.className = 'flex items-center mt-2';
        
        const colorSwatch = document.createElement('div');
        colorSwatch.className = 'w-6 h-6 rounded-full mr-2';
        colorSwatch.style.backgroundColor = preset.color;
        
        const presetInfo = document.createElement('p');
        presetInfo.textContent = `${preset.font}, ${preset.color}`;
        presetInfo.className = 'text-xs text-gray-500';
        
        presetDetails.appendChild(colorSwatch);
        presetDetails.appendChild(presetInfo);
        
        presetBtn.appendChild(presetName);
        presetBtn.appendChild(presetDetails);
        
        presetGrid.appendChild(presetBtn);
    });
    
    presetContent.appendChild(presetLabel);
    presetContent.appendChild(presetGrid);

    // Apply button
    const applyButtonContainer = document.createElement('div');
    applyButtonContainer.className = 'pt-3 border-t border-gray-200';
    
    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply Changes';
    applyButton.className = 'w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors';
    applyButton.id = 'apply-theme-button';
    
    applyButtonContainer.appendChild(applyButton);

    // Add toggle button to show/hide the panel
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Customize Theme';
    toggleBtn.className = 'fixed top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded shadow z-50 flex items-center';
    toggleBtn.id = 'customizer-toggle';
    
    // Add icon to toggle button
    const toggleIcon = document.createElement('span');
    toggleIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947z" clip-rule="evenodd"></path><path d="M10 13a3 3 0 100-6 3 3 0 000 6z"></path></svg>';
    toggleBtn.prepend(toggleIcon);
    
    document.body.appendChild(toggleBtn);

    // Initial state
    container.style.transform = 'translateX(100%)';
    
    // Assemble the UI
    container.appendChild(heading);
    container.appendChild(tabsContainer);
    container.appendChild(fontContent);
    container.appendChild(colorContent);
    container.appendChild(presetContent);
    container.appendChild(applyButtonContainer);
    
    document.body.appendChild(container);

    // Load all fonts upfront
    fontOptions.forEach(font => {
        const linkEl = document.createElement('link');
        linkEl.rel = 'stylesheet';
        linkEl.href = font.url;
        document.head.appendChild(linkEl);
    });

    // Event listeners for tabs
    [fontTab, colorTab, presetTab].forEach(tab => {
        tab.addEventListener('click', () => {
            // Reset all tabs
            [fontTab, colorTab, presetTab].forEach(t => {
                t.className = 'px-4 py-2 font-medium text-gray-400 hover:text-gray-800';
            });
            
            // Highlight active tab
            tab.className = 'px-4 py-2 font-medium text-gray-800 border-b-2 border-blue-500';
            
            // Hide all content
            [fontContent, colorContent, presetContent].forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show active content
            document.getElementById(`${tab.dataset.tab}-tab`).classList.remove('hidden');
        });
    });

    // Panel toggle
    let panelVisible = false;
    toggleBtn.addEventListener('click', () => {
        panelVisible = !panelVisible;
        container.style.transform = panelVisible ? 'translateX(0)' : 'translateX(100%)';
    });

    // Font preview update
    fontSelect.addEventListener('change', () => {
        const selectedFont = fontOptions[fontSelect.value];
        updateFontPreview(selectedFont.value);
    });
    
    fontWeightSelect.addEventListener('change', () => {
        updateFontWeight(fontWeightSelect.value);
    });

    // Update font preview
    function updateFontPreview(fontFamily) {
        const preview = document.getElementById('font-preview');
        const previewTitle = document.getElementById('preview-title');
        const previewBody = document.getElementById('preview-body');
        
        preview.style.fontFamily = fontFamily;
        previewTitle.style.fontFamily = fontFamily;
        previewBody.style.fontFamily = fontFamily;
    }

    // Primary color button clicks from iVALT palette
    const allColorButtons = ivaltButtons.querySelectorAll('button');
    allColorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = brandColors.primary[btn.dataset.color];
            updateColorPicker(color);
            updateColorPreview(color);
        });
    });

    // Additional color button clicks
    const additionalColorButtons = additionalButtons.querySelectorAll('button');
    additionalColorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = brandColors.primary[btn.dataset.color];
            updateColorPicker(color);
            updateColorPreview(color);
        });
    });

    // Custom color input update
    customColorInput.addEventListener('input', () => {
        const color = customColorInput.value;
        customColorHex.value = color;
        updateColorPreview(color);
    });
    
    customColorHex.addEventListener('input', () => {
        let color = customColorHex.value;
        
        // Add # if missing
        if (color.charAt(0) !== '#') {
            color = '#' + color;
            customColorHex.value = color;
        }
        
        // Only update if valid hex
        if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
            customColorInput.value = color;
            updateColorPreview(color);
        }
    });

    // Update color picker and field
    function updateColorPicker(color) {
        customColorInput.value = color;
        customColorHex.value = color;
    }

    // Update color preview
    function updateColorPreview(color) {
        const mainPreview = document.getElementById('main-color-preview');
        const darkPreview = document.getElementById('dark-color-preview');
        const lightPreview = document.getElementById('light-color-preview');
        
        mainPreview.style.backgroundColor = color;
        
        // Generate dark and light variations
        const darkColor = darkenColor(color, 30);
        const lightColor = lightenColor(color, 40);
        
        darkPreview.style.backgroundColor = darkColor;
        lightPreview.style.backgroundColor = lightColor;
    }

    // Preset button clicks
    const presetButtons = presetGrid.querySelectorAll('button');
    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const presetIndex = parseInt(btn.dataset.preset);
            const preset = presets[presetIndex];
            
            // Find font index
            const fontIndex = fontOptions.findIndex(f => f.name === preset.font);
            fontSelect.value = fontIndex;
            
            // Update color
            updateColorPicker(preset.color);
            updateColorPreview(preset.color);
            
            // Update preview
            updateFontPreview(fontOptions[fontIndex].value);
        });
    });

    // Apply button click
    applyButton.addEventListener('click', () => {
        const selectedFont = fontOptions[fontSelect.value];
        const selectedWeight = fontWeightSelect.value;
        const selectedColor = customColorInput.value;
        
        updateFontFamily(selectedFont.value);
        updateFontWeight(selectedWeight);
        updateThemeColor(selectedColor);
        
        alert(`Theme applied!\n\nFont: ${selectedFont.name}\nWeight: ${selectedWeight}\nColor: ${selectedColor}`);
    });

    // Initialize font preview
    updateFontPreview(fontOptions[0].value);
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

// Function to update font weight across the site
function updateFontWeight(weight) {
    // Update headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(el => {
        el.style.fontWeight = weight;
    });
    
    // Update buttons and other prominent elements
    const boldElements = document.querySelectorAll('.font-bold, .font-semibold, .font-medium');
    boldElements.forEach(el => {
        el.style.fontWeight = weight;
    });
}

// Function to update primary color across the site
function updateThemeColor(color) {
    // Update primary color
    document.documentElement.style.setProperty('--primary-color', color);
    
    // Find and update elements with primary color
    // Buttons
    const primaryButtons = document.querySelectorAll('.bg-primary, .bg-secondary, .bg-teal, .bg-navy, [class*="bg-blue"], [class*="bg-teal"], [class*="bg-green"]');
    primaryButtons.forEach(el => {
        if (!el.classList.contains('custom-ignore')) {
            el.style.backgroundColor = color;
        }
    });
    
    // Text
    const primaryText = document.querySelectorAll('.text-primary, .text-secondary, .text-teal, .text-navy, [class*="text-blue"], [class*="text-teal"], [class*="text-green"]');
    primaryText.forEach(el => {
        if (!el.classList.contains('custom-ignore')) {
            el.style.color = color;
        }
    });
    
    // Borders
    const primaryBorders = document.querySelectorAll('.border-primary, .border-secondary, .border-teal, .border-navy, [class*="border-blue"], [class*="border-teal"], [class*="border-green"]');
    primaryBorders.forEach(el => {
        if (!el.classList.contains('custom-ignore')) {
            el.style.borderColor = color;
        }
    });
    
    // Calculate and update accent colors (lighter and darker variations)
    const darkerColor = darkenColor(color, 20);
    const lighterColor = lightenColor(color, 40);
    
    document.documentElement.style.setProperty('--primary-dark', darkerColor);
    document.documentElement.style.setProperty('--primary-light', lighterColor);
}

// Utility function to darken a color
function darkenColor(color, percent) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    r = Math.floor(r * (100 - percent) / 100);
    g = Math.floor(g * (100 - percent) / 100);
    b = Math.floor(b * (100 - percent) / 100);

    r = (r < 0) ? 0 : r;
    g = (g < 0) ? 0 : g;
    b = (b < 0) ? 0 : b;

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Utility function to lighten a color
function lightenColor(color, percent) {
    let r = parseInt(color.substring(1, 3), 16);
    let g = parseInt(color.substring(3, 5), 16);
    let b = parseInt(color.substring(5, 7), 16);

    r = Math.floor(r + (255 - r) * percent / 100);
    g = Math.floor(g + (255 - g) * percent / 100);
    b = Math.floor(b + (255 - b) * percent / 100);

    r = (r > 255) ? 255 : r;
    g = (g > 255) ? 255 : g;
    b = (b > 255) ? 255 : b;

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', function() {
    // Add custom CSS variables
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --font-family: 'Poppins', sans-serif;
            --primary-color: ${brandColors.primary.teal};
            --primary-dark: ${brandColors.variations.dark.teal};
            --primary-light: ${brandColors.variations.light.teal};
            --font-weight-normal: 400;
            --font-weight-bold: 600;
        }
        
        /* Customizer panel styles */
        #font-selector-container {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .tab-content {
            min-height: 300px;
        }
        #customizer-toggle {
            transition: all 0.3s ease;
        }
        #customizer-toggle:hover {
            background-color: #4B5563;
        }
    `;
    document.head.appendChild(style);
    
    // Inject the font selector
    injectFontSelector();
});
