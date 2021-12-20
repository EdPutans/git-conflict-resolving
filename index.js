const state = {
  people: [],
  name: "Nico",
  date: new Date(),
};

function myFunction() {
  console.log(`Hello World, my name is ${state.name}`);
};

function edsFunction() {
  console.log('Hello, Im Ed, heres todays date: ' + state.date);
}