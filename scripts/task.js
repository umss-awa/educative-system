let tasks = [];

$('#btnSubmitFile').on('click', () => {
    tasks.forEach(task => {
        console.log(task);
    });
});

$('#deleteAllTasks').on('click', () => {
    tasks = [];
    $('.content-task').remove();
    $('#uploadFileInput').replaceWith($('#uploadFileInput').val('').clone(true));
    $('.modal-body').append('<div class="content-task mt-3"></div>');
});

$('#uploadFileInput').on('change', e => {
    
    if(e.target.files.length > 0) {
        tasks.push(e.target.files[0]);
        let fileName = e.target.files[0].name;
        let task = `<span class="btn text-left d-block border border-primary mt-2">${fileName}</span>`;
        $('.content-task').append(task);
    }
});
