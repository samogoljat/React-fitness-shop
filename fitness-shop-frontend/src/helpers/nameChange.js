// src/helpers/nameChange.js

export const nameChange = (name) => {
  const formattedName = name.toLowerCase().split(' ').join('_');
  if (name === "Medicine Ball 5kg" || name === "Barbell Set") {
    return formattedName + '.jpg';
  }
  return formattedName + '.webp';
}
