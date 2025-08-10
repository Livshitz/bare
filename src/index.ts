/**
 * @livz/bare
 * Main entry point for the library
 */

// Import the main CSS/LESS styles
import './index.less';

// Export version
export const version = '1.0.0';

// Export CSS classes and utilities
export const CSS = {
  // Add utility functions for working with CSS classes if needed
  classNames: (...classes: (string | boolean | undefined | null | { [key: string]: boolean })[]): string => {
    return classes
      .filter(Boolean)
      .map((c) => {
        if (typeof c === 'string') return c;
        if (typeof c === 'object') {
          return Object.entries(c)
            .filter(([_, value]) => Boolean(value))
            .map(([key]) => key)
            .join(' ');
        }
        return '';
      })
      .join(' ');
  }
};

// If you have Vue components to export, add them here
// e.g., export { Component } from './components/Component';

// Default export for convenient import
export default {
  version,
  CSS
}; 