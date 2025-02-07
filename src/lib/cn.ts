import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Concatenates a list of class names, filtering out any that are undefined, falsey, or duplicate.
 * Merges Tailwind CSS class names for optimal results (e.g., combining conflicting classes).
 *
 * @param {...ClassValue[]} inputs - A list of class names or values to concatenate.
 * @returns {string} The concatenated and merged class names.
 *
 * @example
 * // Example usage:
 * const className = cn('bg-red-500', isActive && 'text-white', 'px-4');
 * // Returns: 'bg-red-500 text-white px-4' if isActive is true
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}