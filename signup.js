// როდესაც დოკუმენტი სრულად დაიტვირთება
document.addEventListener('DOMContentLoaded', () => {
    // ფორმის ელემენტის მიღება
    const form = document.querySelector('form');
    
    // ფორმის სექრეტული მოვლენების მოსმენა
    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting the default way
        event.preventDefault();

        // ფორმის ვალიდაციის შემოწმება
        if (form.checkValidity()) {
            // თუ ვალიდურია, გადამისამართეთ მომხმარებელი სხვა გვერდზე
            window.location.href = './go.html';
        } else {
            // თუ არ არის ვალიდური, გამოტანეთ ფორმის ვალიდაციის შეტყობინებები
            form.reportValidity();
        }
    });
});

