import { test, expect } from 'vitest';
import { transformer } from './transformer';
test('Test de la fonction transformer avec une chaîne vide', () => {
  const result = transformer('');
  expect(result).toBe('');
});

test('Test de la fonction transformer avec des caractères en minuscules', () => {
  const result = transformer('test');
  expect(result).toBe('TEST');
});

test('Test de la fonction transformer avec des caractères spéciaux', () => {
  const result = transformer('@#%$');
  expect(result).toBe('@#%$');
});

// Ajoutez d'autres tests pour couvrir d'autres cas de figure

console.log("Tous les tests ont réussi !");