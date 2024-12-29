function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate === '') {
        document.getElementById('result').innerText = 'Please enter your birthdate.';
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    let hours = today.getHours() - birthDate.getHours();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (hours < 0) {
        hours += 24;
    }

    document.getElementById('result').innerText = `You are ${years} years, ${months} months, ${days} days, and ${hours} hours old.`;
}
