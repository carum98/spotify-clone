interface RGB {
    r: number;
    g: number;
    b: number;
}

function createImageData(image: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    image.crossOrigin = "Anonymous";
    
    context!.drawImage(image, 0, 0);
    return context!.getImageData(0, 0, canvas.width, canvas.height);
}

function getRGB(imageData: ImageData) {
    const rgbValues = [];

    for (let i = 0; i < imageData.data.length; i += 4) {
      const rgb = {
        r: imageData.data[i],
        g: imageData.data[i + 1],
        b: imageData.data[i + 2],
      };

      rgbValues.push(rgb);
    }

    return rgbValues;
}

function findBiggestColorRange(rgbValues: RGB[]) {
    let rMin = Number.MAX_VALUE;
    let gMin = Number.MAX_VALUE;
    let bMin = Number.MAX_VALUE;
  
    let rMax = Number.MIN_VALUE;
    let gMax = Number.MIN_VALUE;
    let bMax = Number.MIN_VALUE;
  
    rgbValues.forEach((pixel) => {
        rMin = Math.min(rMin, pixel.r);
        gMin = Math.min(gMin, pixel.g);
        bMin = Math.min(bMin, pixel.b);
  
        rMax = Math.max(rMax, pixel.r);
        gMax = Math.max(gMax, pixel.g);
        bMax = Math.max(bMax, pixel.b);
    });
  
    const rRange = rMax - rMin;
    const gRange = gMax - gMin;
    const bRange = bMax - bMin;
  
    const biggestRange = Math.max(rRange, gRange, bRange);

    if (biggestRange === rRange) {
      return "r";
    } else if (biggestRange === gRange) {
      return "g";
    } else {
      return "b";
    }
}

function quantization(rgbValues: RGB[], depth: number): RGB[] {
    const MAX_DEPTH = 4;

    if (depth === MAX_DEPTH || rgbValues.length === 0) {
    const color = rgbValues.reduce((prev: any, curr: any) => {
        prev.r += curr.r;
        prev.g += curr.g;
        prev.b += curr.b;

        return prev;
        },
        {
            r: 0,
            g: 0,
            b: 0,
        }
    );

    color.r = Math.round(color.r / rgbValues.length);
    color.g = Math.round(color.g / rgbValues.length);
    color.b = Math.round(color.b / rgbValues.length);

    return [color];
  }
  
    const componentToSortBy = findBiggestColorRange(rgbValues);

    rgbValues.sort((p1: any, p2: any) => {
        return p1[componentToSortBy] - p2[componentToSortBy];
    });
  
    const mid = rgbValues.length / 2;

    return [
      ...quantization(rgbValues.slice(0, mid), depth + 1),
      ...quantization(rgbValues.slice(mid + 1), depth + 1),
    ];
  }

export function colorPalette(image: HTMLImageElement): RGB[] {
    const imageData = createImageData(image)
    const rgbValues = getRGB(imageData)
    const palette = quantization(rgbValues, 2)

    return palette
}