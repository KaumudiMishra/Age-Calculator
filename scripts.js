function getdob() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Add 1 because getMonth() is zero-indexed
    const year = currentDate.getFullYear();

    const dobinput = document.getElementById('date').value;
    if (!dobinput) {
        document.getElementById('result').textContent = "Please enter a date!";
        return;
    }

    const dob = new Date(dobinput);
    agey = year - dob.getFullYear();
    agem = month - (dob.getMonth() + 1);
    aged = day - dob.getDate();

    if (aged < 0) {
        agem--;
        const prevmonthdays = new Date(year, month - 1, 0).getDate();
        aged += prevmonthdays;
    }

    if (agem < 0) {
        agey--;
        agem += 12;
    }

    document.getElementById('result').textContent = `your age is ${agey}  years ${agem}  months and  ${aged}  days. `;
}