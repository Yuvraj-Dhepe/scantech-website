// Barcode Scanners data
const barcodeScanners = [
  {
    id: "st-1011",
    name: "ST-1011 Handheld Laser Barcode Scanner",
    description: "Reliable Laser Barcode Scanner for Retail and Inventory",
    image: "/images/products/ST-1011.png",
    features: [
      "Light source: visible laser diode, 650nm",
      "Scan rate: 300 scans per second",
      "Resolution: >4miI/0.1MM(PCS90%, Code 39)",
      "Scanning type: single-line",
      "Depth of field: 10-380mm",
      "Symbologies: All normal 1D Barcodes"
    ]
  },
  {
    id: "st-1021",
    name: "ST-1021 Linear Barcode Scanner",
    description: "CCD Barcode Scanner with High Resolution",
    image: "/images/products/ST-1011.png",
    features: [
      "Light Source: 625nm +/- 10nm visible red LED",
      "Decoded Capability: All normal 1D Barcodes",
      "Scanning Principle: Image linear CCD",
      "Scanning Speed: >300 scans per second",
      "Resolution: >4miI/0.1MM(PCS90%, Code 39)",
      "Depth of Scanning Field: 40-500mm",
      "Communication Interface: USB-HID, Rs232"
    ]
  },
  {
    id: "st-1011w",
    name: "ST-1011W Wireless Laser Barcode Scanner",
    description: "Wireless Laser Scanner with Long Battery Life",
    image: "/images/products/ST-1021W-Wireless-CCD-Barcode-Scanne.png",
    features: [
      "Light source: visible laser diode, 650nm",
      "Scan rate: 300 scans per second",
      "Resolution: >4miI/0.1MM(PCS90%, Code 39)",
      "Battery: 1200mAH",
      "Communication Distance: Up to 50mtrs",
      "Symbologies: All normal 1D Barcodes",
      "Transmission Mode: 2.4GHz Wireless"
    ]
  },
  {
    id: "st-1021w",
    name: "ST-1021W Wireless CCD Barcode Scanner",
    description: "Wireless CCD Scanner with Extended Battery Life",
    image: "/images/products/ST-1021W-Wireless-CCD-Barcode-Scanne.png",
    features: [
      "Light Source: 625nm +/- 10nm visible red LED",
      "Scan rate: 300 scans per second",
      "Resolution: >4miI/0.1MM(PCS90%, Code 39)",
      "Battery: 1200mAH",
      "Communication Distance: Up to 50mtrs",
      "Symbologies: All normal 1D Barcodes",
      "Transmission Mode: 2.4GHz Wireless",
      "Scanning Principle: Image linear CCD"
    ]
  },
  {
    id: "st-904",
    name: "ST-904 Wireless Laser Barcode Scanner",
    description: "Long-Range Wireless Laser Scanner with IP52 Rating",
    image: "/images/products/ST-904-Wireless-Laser-Barcode-Scanner.png",
    features: [
      "Scan Element Type: laser",
      "Optical Source: 650nm Visible red light diode",
      "Indicator: Siren and LED light",
      "Wireless Distance: 30 - 400mtrs",
      "Depth Filed: 5mm-630mm",
      "Reading Percision: >4mil",
      "Decoding Speed: 100times/second",
      "IP Rating: IP52"
    ]
  },
  {
    id: "st-1503",
    name: "ST-1503 Wireless Barcode Scanner",
    description: "High-Resolution Wireless Scanner with Extended Range",
    image: "/images/products/ST-1503-Wireless-Barcode-Scanner.png",
    features: [
      "Imaging Sensor: CCD Resolution",
      "Optical Source: 620nm Visible red light diode",
      "Wireless Transmitting Distance: 30 - 400mtrs",
      "Ratio: 2500 pixel",
      "Image Resolution: >5mil",
      "Minimum Contrast: >30%",
      "Decoding Speed: 280times/second",
      "Indicator: Siren and LED light"
    ]
  },
  {
    id: "st-2040",
    name: "ST-2040 2D Handheld Barcode Scanner",
    description: "Advanced 2D Barcode Scanner for QR Codes and More",
    image: "/images/products/ST-2040-2D-Handheld-Barcode.png",
    features: [
      "Optical System: CMOS",
      "Capture light source: 617nm LED",
      "Lighting source: 6500K LED",
      "Recognition accuracy: 5mil (Code39,70% Printing contrast)",
      "Interface: USB-HID, Rs232 (Optional)",
      "Symbologies: All normal 1D & 2D Barcodes"
    ]
  },
  {
    id: "st-2040w",
    name: "ST-2040W 2D Wireless Barcode Scanner",
    description: "Wireless 2D Scanner with Extended Range",
    image: "/images/products/ST-2040W.png",
    features: [
      "Optical System: CMOS",
      "Capture light source: 617nm LED",
      "Lighting source: 6500K LED",
      "Recognition accuracy: 5mil (Code39,70% Printing contrast)",
      "Symbologies: All normal 1D & 2D Barcodes",
      "Battery: 1200mAH",
      "Communication Distance: Up to 50mtrs",
      "Transmission Mode: 2.4GHz Wireless"
    ]
  },
  {
    id: "st-2020w",
    name: "ST-2020W 2D Wireless Barcode Scanner",
    description: "Long-Range 2D Wireless Scanner with 433MHz Technology",
    image: "/images/products/ST-2020W-Wireless-2D-Barcode-Scanner.png",
    features: [
      "Optical System: CMOS",
      "Sensor Resolution: 648X488 pixels",
      "Lighting source: White LED*1",
      "Recognition accuracy: 5mil",
      "Symbologies: All normal 1D & 2D Barcodes",
      "Battery: 1500mAH",
      "Communication Distance: Up to 100mtrs",
      "Transmission Mode: 433MHz Wireless"
    ]
  },
  {
    id: "st-2403",
    name: "ST-2403 Bluetooth Barcode Scanner",
    description: "Compact Bluetooth Scanner for 1D/2D Barcodes",
    image: "/images/products/ST-2403-Bluetooth-Barcode-Scanner.png",
    features: [
      "Support 1D/2D Barcodes on paper and screen",
      "752x480 Pixel resolution",
      "Support USB, Bluetooth 4.0, 2.4GHz RF Communication",
      "Transmission distance for Bluetooth 10mtr and 2.4GHz up to 20 Mtr",
      "1000mAH battery, 16MB memory, portable, mini size",
      "Image Resolution ≥ 4mil Mtr"
    ]
  },
  {
    id: "st-2503",
    name: "ST-2503 2D Wireless Barcode Scanner",
    description: "High-Resolution 2D Wireless Scanner with 433MHz Technology",
    image: "/images/products/ST-1503-Wireless-Barcode-Scanner.png",
    features: [
      "Imaging Sensor: Cmos",
      "Optical Source: 620nm Visible red light diode",
      "Wireless Transmitting Distance: 30 - 400mtrs",
      "Frequency: 433 MHz RF",
      "Resolution Ratio: 30 Million pixels",
      "Image Resolution: >5mil",
      "Minimum Contrast: >30%",
      "Battery Capacity: 600mAH",
      "IP Rating: IP52"
    ]
  },
  {
    id: "st-2300",
    name: "ST-2300 2D Omni Barcode Scanner",
    description: "High-Speed Omnidirectional 2D Scanner",
    image: "/images/products/ST-2300.png",
    features: [
      "Optical resolution: 640*480",
      "Lighting Source: Red LED supplement",
      "Scanning speed: 500 times/second",
      "Printing Contrast: 20%",
      "IP level: Up to IP5X standard",
      "Symbologies: All normal 1D & 2D Barcodes",
      "Interface: USB-HID, Rs232 (Optional)"
    ]
  },
  {
    id: "st-3000",
    name: "ST-3000 2D Omni Barcode Scanner",
    description: "Premium Omnidirectional 2D Scanner with High Resolution",
    image: "/images/products/ST-3000-2D-Omni-Barcode-Scanner.png",
    features: [
      "Optical resolution: 1280*900",
      "Lighting Source: Illumination 650nm LED",
      "Scanning speed: 500 times/second",
      "Printing Contrast: 25% minimum reflective difference",
      "IP level: Up to IP5X standard",
      "Symbologies: All normal 1D & 2D Barcodes",
      "Interface: USB-HID, Rs232 (Optional)"
    ]
  },
  {
    id: "st-523",
    name: "ST-523 Android PDA",
    description: "Android-based Portable Data Terminal with 2D Scanner",
    image: "/images/products/ST-523-Android-PDA.png",
    features: [
      "System: Android 7.0",
      "Display: 4.5\" IPS Color Display",
      "Resolution: 480*854",
      "CPU: ARM Cortex-A53 Quad-Core 64-bit 1.3GHz",
      "Support: 4G, Wi-Fi and Bluetooth",
      "Battery: 3.8V 4200mAh",
      "Barcode: 2D Imager Scanners",
      "Camera: 8MP Autofocus camera with flash",
      "Optional: RF ID and NFC"
    ]
  }
];

export default barcodeScanners;
