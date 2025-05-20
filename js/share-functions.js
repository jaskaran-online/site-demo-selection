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