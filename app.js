const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    if (e.shiftKey && this.checked) {
        let inBetween = false;
        checkboxes.forEach(chekbox => {
            if (chekbox === this || chekbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) chekbox.checked = true;
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));