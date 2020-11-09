import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";


const breeds = [
  { name: "Bichon Frisé" },
  { name: "Bolognese" },
  { name: "Coton de Tulear" },
  { name: "Havanese" },
  { name: "Maltese" }
]

const doggos = JSON.parse(
  readFileSync(path.join(__dirname, 'res.json')).toString()
)


/** we will here then test if everything is matching **/
export const ANIMALS = ["dog", "cat", "bird"];
export const _breeds = breeds;
export const _dogs = doggos.animals;


/** creating a mock library of pet
 * => so when we call our pet API client
 * ==> we create on object which looks like
 * 
 * fn() a spy function 
 * => after, make sure this is call,
 *   make call of this things... 
 * 
 * => it going to run this function 
 *   then return a "promise of an object" */
const mock = {
  breeds: jest.fn(() => {
    return {
      then: callback => act(() => {
        callback({ breeds });
      })
    };
  }),
  animals: jest.fn(() => {
    return {
      then: callback => act(() => {
        callback(doggos);
      })
    };
  })
};


export default mock;