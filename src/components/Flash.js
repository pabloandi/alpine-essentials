const Flash = (message) => {
    window.dispatchEvent(new CustomEvent('flash', { 
        detail: message
    }));
};


export default Flash;