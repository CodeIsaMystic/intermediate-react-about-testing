/** There is a complication with AJAX calls
 * => write a manual api mocks
 * to be able fix this problem
 * then implement some test
 **/

import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import pet, { ANIMALS, _breeds, _dogs } from "@frontendmasters/pet";
import SearchParams from "../SearchParams";


/** Requirement of react library
 * its just have be here
 */
afterEach(cleanup);

/** This is just going rendering with Node
 * That is faster **/
test("SearchParams", async () => {
  const { getByTestId } = render(<SearchParams />);

  /** When it grabbed an animal serve it on searchParams
   * => if I give it cat bird & dog
   * ==> how many options they have
    */
  const animalDropdown = getByTestId('use-dropdown-animal');
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);



  /**  test 2 
   * it seems dat pet.breeds not be an obj
   * or not grabbing the api mock
   * => needed to come back with more weapons ;)
  
  expect(pet.breeds).toHaveBeenCalled();
  const breedDropdown = getByTestId("use-dropdown-breed");
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);
  **/

  /** test 3
   * At first render , simulating a click on the btn
   * => see what get back from the API
   * it need to change async function on SearchParams.js then Results.js
   * 
  const searchResults = getByTestId('search-results');
  expect(searchResults.textContent).toEqual('No Pets Found');
  fireEvent(getByText('Submit'), new MouseEvent('click'));
  expect(pet.animals).toHaveBeenCalled();
  expect(searchResults.children.length).toEqual(_dogs.length);
  */

  /**  test 4  
   * toMatchInlineSnapshot is going to render thing out
   *  => the first time, it dump all the mark up
   *  => then it says , I assume after that everything match
  
  expect(container.firstChild).toMatchInlineSnapshot();
  */
});