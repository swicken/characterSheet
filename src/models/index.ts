// Imports Start
import Spells from './Spells';
import Alignment from './Alignment';
import Class from './Class';
import Race from './Race';
import Character from './Character';
// Imports End

// Define an interface with a string index signature
interface Models {
  [key: string]: any;
}

// Exports
export const models: Models = {
    Spells,
    Alignment,
    Class,
    Race,
    Character,
};
