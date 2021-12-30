const inputs = document.querySelectorAll('.controls input');

const handleUpdate = e => {
    const { name, value, dataset: { sizing } } = e.target;
    const suffix = sizing || '';
    document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));

