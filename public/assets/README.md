# Assets Directory

This directory contains static assets for the ALX Listing App.

## Image Structure

The following images should be added to this directory for local use:

### Property Images
- `cozy-apartment.jpg` - Image for the cozy apartment listing
- `beach-house.jpg` - Image for the beach house listing  
- `mountain-retreat.jpg` - Image for the mountain retreat listing

### App Assets
- `logo.png` - ALX Listing App logo
- `hero-bg.jpg` - Hero section background image

## Current Setup

Currently, the app uses external Unsplash images for the property listings:
- Cozy Apartment: https://images.unsplash.com/photo-1560448204-e02f11c3d0e2
- Beach House: https://images.unsplash.com/photo-1502672260266-1c1ef2d93688
- Mountain Retreat: https://images.unsplash.com/photo-1441974231531-c6227db76b6e

## Adding Local Images

To use local images instead of external ones:

1. Add your image files to this directory
2. Update the image paths in `pages/index.tsx`
3. Replace the Unsplash URLs with local paths like `/assets/cozy-apartment.jpg`

## Image Requirements

- **Format**: JPG or PNG
- **Size**: Recommended 800x600px or larger
- **Optimization**: Compress images for web use
- **Aspect Ratio**: 4:3 or 16:9 for consistent card layouts 