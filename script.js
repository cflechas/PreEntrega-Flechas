let people = [];

function addPerson() {
    let nameInput = document.getElementById("name");
    let ageInput = document.getElementById("age");
    let name = nameInput.value.trim();
    let age = parseInt(ageInput.value);
    if (!isNaN(age) && name !== "") {
        people.push({ name: name, age: age });
        nameInput.value = "";
        ageInput.value = "";
    }
}

function calculateAverage() {
    if (people.length === 0) {
        document.getElementById("output").innerText = "Please enter at least one person's information.";
        return;
    }

    let sum = 0;
    for (let i = 0; i < people.length; i++) {
        sum += people[i].age;
    }

    let average = sum / people.length;
    document.getElementById("output").innerText = "Average Age: " + average.toFixed(2);
}

