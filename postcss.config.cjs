// Use require since postcss config often runs in a context
// where ES modules might not be fully supported by all tools,
// or stick to simple string names if supported.
// Let's try the standard array format with require:

// postcss.config.js (If using type:module, might need .cjs or dynamic import)
// Switching back to CommonJS for broader compatibility with PostCSS tooling:
module.exports = {
  plugins: [
    'tailwindcss',  // Try using the string name instead of require
    'autoprefixer'
  ]
}; 