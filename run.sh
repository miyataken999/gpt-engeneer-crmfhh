#!/bin/bash

# Install dependencies
npm install --save @google/clasp

# Run the code
npx @google/clasp login
npx @google/clasp create --type standalone --title "Google Apps Script"
npx @google/clasp push -f Code.gs
npx @google/clasp execute run
