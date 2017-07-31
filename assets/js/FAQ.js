

function faq() {
    document.getElementById('faq').addEventListener('click', function (event) {
        var button = event.target;
        if (button.classList.contains('open')) {
            var question = button.parentElement;
            var description = question.parentElement.querySelector('.description');

            question.classList.toggle('active');
            description.classList.toggle('hide');
        }
    });

    //$(".open").click(function () {
    //    $(this).closest('.faq').toggleClass('active');
    //});
}

faq();