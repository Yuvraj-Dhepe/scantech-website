#!/bin/bash

# Create base directories
mkdir -p public/assets/downloads/{brochures,drivers,software}/{barcode-printer,barcode-scanner,pos-printer,pos,inkjet-printer,eas,label-design}

# Function to download a file and save it with a clean filename
download_file() {
  local url="$1"
  local category="$2"
  local subcategory="$3"
  local output_dir="public/assets/downloads/$category/$subcategory"
  
  # Extract filename from URL and clean it
  local filename=$(basename "$url" | sed 's/%20/-/g' | sed 's/+/-/g')
  
  # Create output directory if it doesn't exist
  mkdir -p "$output_dir"
  
  # Download the file
  echo "Downloading $url to $output_dir/$filename"
  wget -q --show-progress -O "$output_dir/$filename" "$url"
  
  # Check if download was successful
  if [ $? -eq 0 ]; then
    echo "Successfully downloaded $filename"
  else
    echo "Failed to download $filename"
  fi
}

# Barcode Printer Brochures
download_file "http://scantech.co.in/img/Broacher/Broucher/Scantech%20Broucher%20ST-500U-UB.pdf" "brochures" "barcode-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/SBarco-T4eS.pdf" "brochures" "barcode-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/T4+1.jpg" "brochures" "barcode-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/Scantech%20Broucher%20ST-428B.pdf" "brochures" "barcode-printer"

# Barcode Scanner Brochures
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-1011%20Laser%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-1021%20Linear%20CCD%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-1011W%20Wireless%20Laser%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-1021W%20Wireless%20CCD%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-904%20Wireless%20Laser%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-1503%20Wireless%20CCD%20Barcode%20Scanner%20New.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-1402%20Bluetooth%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-2040%202D%20Wire%20Barcode%20Scanner%20new.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-2403WB%20Wireless%20Bluetooth%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-2010W%202D%20Wireless%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-2020W%20433%20Wireless%202D%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-2503%202D%20Wireless%20Barcode%20Scanner.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-2100%202D%20Omnidirectional%20Barcode%20Scanner%20New.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-3000%202D%20Omni%20New.pdf" "brochures" "barcode-scanner"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-523%20PDA.pdf" "brochures" "barcode-scanner"

# POS Printer Brochures
download_file "http://scantech.co.in/img/Broacher/Broucher/Scantech%20ST-82USE.pdf" "brochures" "pos-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-58BT%20Mobile%20Bluetooth%20Printer.pdf" "brochures" "pos-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-80BT%20specification.pdf" "brochures" "pos-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-81BT%20Bluetooth%20Mobile%20Printer.pdf" "brochures" "pos-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-81UE%20UBW%20Thermal%20Receipt%20Printer.pdf" "brochures" "pos-printer"

# POS Brochures
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-520%20Android%20PDA.pdf" "brochures" "pos"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-521%20522%20PDA%20.pdf" "brochures" "pos"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-10%20Mini%20POS.pdf" "brochures" "pos"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-15%20All%20in%20One%20POS%20New.pdf" "brochures" "pos"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-14%20All%20in%20One%20POS.pdf" "brochures" "pos"
download_file "http://scantech.co.in/img/Broacher/Broucher/Cash-Drawer.jpg" "brochures" "pos"

# Inkjet Printer Brochures
download_file "http://scantech.co.in/img/Broacher/Broucher/ST-127%20Online%20Inkjet%20Printer.pdf" "brochures" "inkjet-printer"

# EAS Brochures
download_file "http://scantech.co.in/img/Broacher/Broucher/EAS.jpg" "brochures" "eas"

# Drivers
download_file "http://scantech.co.in/img/ST-500%20BARCODE%20PRINTER%20DRIVER.rar" "drivers" "barcode-printer"
download_file "http://scantech.co.in/img/ST-500%20Diagnostic%20Tool%20V1.035b.rar" "drivers" "barcode-printer"
download_file "http://scantech.co.in/img/ST-83%20Thermal%20Printer%20Driver.rar" "drivers" "pos-printer"
download_file "http://scantech.co.in/img/ST-83%20Thermal%20Printer%20Tools.rar" "drivers" "pos-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/ST80Setup.exe" "drivers" "pos-printer"
download_file "http://scantech.co.in/img/Broacher/Broucher/4BARCODE_2019.1_M-3.exe" "drivers" "barcode-scanner"

# Software
download_file "http://scantech.co.in/img/Broacher/Broucher/BT2016_R3_3094_UL_4Barcode.exe" "software" "label-design"

echo "All downloads completed!"
