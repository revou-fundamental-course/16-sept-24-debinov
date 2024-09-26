function form_Update(){
    // Value inputan
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const message = document.getElementById('message').value;

    // Value radio button 
    const genderElems = document.getElementsByName('gender');
    let gender = '';
    for (let i = 0; i < genderElems.length; i++){
        if (genderElems[i].checked){
            gender = genderElems[i].value;
        }
    }

    const currentTime = new Date().toLocaleString(); // Format wakktu sesuai dengan waktu lokal

    // Output Preview 
    document.getElementById('output-time').textContent = currentTime;
    document.getElementById('output-name').textContent= name;
    document.getElementById('output-birthdate').textContent= birthdate;
    document.getElementById('output-gender').textContent= gender;
    document.getElementById('output-message').textContent = message
}