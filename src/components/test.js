function makeStringLowerCase(str) {
    return str.toLowerCase();
}

const d = new Date('2025-04-25');
const today = new Date();
d > today
    ? console.log(
        `Target Date is Less than Today. Target = ${d}, Today = ${today}`,
    )
    : console.log(
        `Target Date is Greater Than Today. Target = ${d}, Today = ${today}`,
    );

export default makeStringLowerCase;
