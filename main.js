'use strict';

let button = document.getElementById('change'),
    color = document.getElementById('color');

    function colored() {
        let col1 = Math.floor(Math.random() * 256);
        let col2 = Math.floor(Math.random() * 256);
        let col3 = Math.floor(Math.random() * 256);
    
        document.body.style.backgroundColor = `#${col1.toString(16)}${col2.toString(16)}${col3.toString(16)}`;
        color.textContent = `#${col1.toString(16)}${col2.toString(16)}${col3.toString(16)}`;

    }

    colored();


button.addEventListener('click', colored);