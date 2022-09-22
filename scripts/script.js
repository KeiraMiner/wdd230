        const options = {day: 'numeric', month: 'numeric', year: 'numeric', };
        document.getElementById('lastmod').textContent = new Date().toLocaleDateString('en-US', options);