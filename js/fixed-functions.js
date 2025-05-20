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

// Theme configuration object structure
const defaultThemeConfig = {
    font: {
        family: "'Poppins', sans-serif",
        index: 0,
        weight: '400'
    },
    color: {
        primary: '#30B68E',
        dark: '#0F766E',
        light: '#B3EBDC'
    }
};

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

// Update font preview
function updateFontPreview(fontFamily) {
    const preview = document.getElementById('font-preview');
    const previewTitle = document.getElementById('preview-title');
    const previewBody = document.getElementById('preview-body');
    
    if (preview) preview.style.fontFamily = fontFamily;
    if (previewTitle) previewTitle.style.fontFamily = fontFamily;
    if (previewBody) previewBody.style.fontFamily = fontFamily;
}

// Update color preview
function updateColorPreview(color) {
    const mainPreview = document.getElementById('main-color-preview');
    const darkPreview = document.getElementById('dark-color-preview');
    const lightPreview = document.getElementById('light-color-preview');
    
    if (mainPreview) mainPreview.style.backgroundColor = color;
    
    // Generate dark and light variations
    const darkColor = darkenColor(color, 30);
    const lightColor = lightenColor(color, 40);
    
    if (darkPreview) darkPreview.style.backgroundColor = darkColor;
    if (lightPreview) lightPreview.style.backgroundColor = lightColor;
}

// Load theme configuration from localStorage
function loadThemeConfig() {
    try {
        const savedConfig = localStorage.getItem('ivalt-theme-config');
        if (savedConfig) {
            return JSON.parse(savedConfig);
        }
    } catch (error) {
        console.error('Error loading theme configuration:', error);
    }
    return defaultThemeConfig;
}

// Save theme configuration to localStorage
function saveThemeConfig(config) {
    try {
        localStorage.setItem('ivalt-theme-config', JSON.stringify(config));
    } catch (error) {
        console.error('Error saving theme configuration:', error);
    }
}

// Get current theme configuration
function getCurrentConfig() {
    // Get current font family and index
    const fontSelect = document.getElementById('font-selector');
    const fontIndex = fontSelect ? parseInt(fontSelect.value) : 0;
    const fontFamily = fontOptions[fontIndex].value;
    
    // Get current font weight
    const fontWeightSelect = document.getElementById('font-weight-selector');
    const fontWeight = fontWeightSelect ? fontWeightSelect.value : '400';
    
    // Get current color
    const colorPicker = document.getElementById('custom-color-picker');
    const primaryColor = colorPicker ? colorPicker.value : defaultThemeConfig.color.primary;
    
    // Calculate variants
    const darkColor = darkenColor(primaryColor, 30);
    const lightColor = lightenColor(primaryColor, 40);
    
    return {
        font: {
            family: fontFamily,
            index: fontIndex,
            weight: fontWeight
        },
        color: {
            primary: primaryColor,
            dark: darkColor,
            light: lightColor
        }
    };
}

// Apply imported configuration
function applyImportedConfig(config) {
    // Validate the config
    if (!config || !config.font || !config.color) {
        console.error('Invalid configuration format');
        return;
    }
    
    // Update font selector
    const fontSelect = document.getElementById('font-selector');
    if (fontSelect && config.font.index !== undefined) {
        fontSelect.value = config.font.index;
        updateFontPreview(fontOptions[config.font.index].value);
    }
    
    // Update font weight
    const fontWeightSelect = document.getElementById('font-weight-selector');
    if (fontWeightSelect && config.font.weight) {
        fontWeightSelect.value = config.font.weight;
    }
    
    // Update color picker
    const colorPicker = document.getElementById('custom-color-picker');
    const colorHex = document.getElementById('custom-color-hex');
    if (colorPicker && config.color.primary) {
        colorPicker.value = config.color.primary;
        if (colorHex) colorHex.value = config.color.primary;
        updateColorPreview(config.color.primary);
    }
    
    // Apply changes to the page
    updateFontFamily(config.font.family);
    updateFontWeight(config.font.weight || '400');
    updateThemeColor(config.color.primary);
    
    // Save the imported configuration
    saveThemeConfig(config);
}

// Share button creation
function createShareButton() {
    const shareButtonContainer = document.createElement('div');
    shareButtonContainer.className = 'mt-3 border-t border-gray-200 pt-3';
    
    const shareButton = document.createElement('button');
    shareButton.id = 'share-config-button';
    shareButton.textContent = 'Share Configuration';
    shareButton.className = 'w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition-colors mb-2 flex items-center justify-center';
    
    // Add icon to share button
    const shareIcon = document.createElement('span');
    shareIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>';
    shareButton.prepend(shareIcon);
    
    // Share options dropdown
    const shareOptions = document.createElement('div');
    shareOptions.id = 'share-options';
    shareOptions.className = 'hidden bg-white border border-gray-200 rounded p-2 space-y-2';
    
    // Copy to clipboard option
    const copyOption = document.createElement('button');
    copyOption.textContent = 'Copy to Clipboard';
    copyOption.className = 'w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center';
    
    const copyIcon = document.createElement('span');
    copyIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" /><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" /></svg>';
    copyOption.prepend(copyIcon);
    
    // Download JSON option
    const downloadOption = document.createElement('button');
    downloadOption.textContent = 'Download JSON';
    downloadOption.className = 'w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center';
    
    const downloadIcon = document.createElement('span');
    downloadIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
    downloadOption.prepend(downloadIcon);
    
    // Import JSON option
    const importOption = document.createElement('button');
    importOption.textContent = 'Import Configuration';
    importOption.className = 'w-full text-left px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center';
    
    const importIcon = document.createElement('span');
    importIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>';
    importOption.prepend(importIcon);
    
    // Add file input for import (hidden)
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.id = 'import-config-file';
    fileInput.accept = 'application/json';
    fileInput.style.display = 'none';
    
    // Assemble share options
    shareOptions.appendChild(copyOption);
    shareOptions.appendChild(downloadOption);
    shareOptions.appendChild(importOption);
    
    shareButtonContainer.appendChild(shareButton);
    shareButtonContainer.appendChild(shareOptions);
    shareButtonContainer.appendChild(fileInput);
    
    // Event Listeners
    shareButton.addEventListener('click', () => {
        const shareOpts = document.getElementById('share-options');
        shareOpts.classList.toggle('hidden');
    });
    
    copyOption.addEventListener('click', () => {
        const config = getCurrentConfig();
        const configJson = JSON.stringify(config, null, 2);
        
        navigator.clipboard.writeText(configJson).then(() => {
            alert('Configuration copied to clipboard!');
            document.getElementById('share-options').classList.add('hidden');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy configuration. See console for details.');
        });
    });
    
    downloadOption.addEventListener('click', () => {
        const config = getCurrentConfig();
        const configJson = JSON.stringify(config, null, 2);
        const blob = new Blob([configJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ivalt-theme-config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        document.getElementById('share-options').classList.add('hidden');
    });
    
    importOption.addEventListener('click', () => {
        document.getElementById('import-config-file').click();
        document.getElementById('share-options').classList.add('hidden');
    });
    
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const config = JSON.parse(e.target.result);
                    applyImportedConfig(config);
                    alert('Configuration imported successfully!');
                } catch (error) {
                    console.error('Error importing configuration:', error);
                    alert('Failed to import configuration. Invalid file format.');
                }
            };
            reader.readAsText(file);
        }
    });
    
    return shareButtonContainer;
}