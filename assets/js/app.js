'use strict';

import { select, selectAll, listen } from "./utils.js";

const API_URL = 'https://randomuser.me/api/?results=3'; 
const randomContainer = select('.random-container'); 
const nameElements = selectAll('.random-container h3'); 
const jobElements = selectAll('.random-container .job'); 
const imageElements = selectAll('.random-container img'); 

listen('load', window, () => {
    getRandomUsers();
});

async function getRandomUsers() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`${response.statusText} (${response.status})`);
    }

    const data = await response.json();
    const users = data.results;

    populateRandomUsers(users);
  } catch (error) {
    console.error(error.message);
  }
}

function populateRandomUsers(users) {
    users.forEach((user, index) => {
        if (nameElements[index]) {
            nameElements[index].textContent = `${user.name.first} ${user.name.last}`;
        }

        if (jobElements[index]) {
            jobElements[index].textContent = `${user.location.city}, ${user.location.state}`;
        }

        if (imageElements[index]) {
            imageElements[index].src = user.picture.medium;
            imageElements[index].classList.add('profile-photo');
        }
    });
}
