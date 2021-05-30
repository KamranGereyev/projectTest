const formDataCreator = (forms) => {
    const formData = new FormData();
    
    for (const property in forms){
        formData.append(property, forms[property]);
    }
    
    return formData;
}

export default formDataCreator;