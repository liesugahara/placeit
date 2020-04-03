var newMovie;
function newMovie (){
    $.confirm({
        columnClass: 'small',
        smoothContent: true,
        title: 'Crear Película',
        content: '' +
        '<form action="" class="movies-form" id="moviesform">' +
        '<label>Título</label>' +
        '<input type="text" id="name" required />' +
        '</div>' +
        '<div>' +
        '<label>Sinopsis</label>' +
        '<input type="text" id="description" required />' +
        '</div>' +
        '<div>' +
        '<label>Poster URL</label>' +
        '<input type="text" id="photo-url" required />' +
        '</div>' +
        '<div id="fechaDiv" class="fechaDiv">' +
        '<label>Fechas</label>' +
        '<input type="text" name="daterange" id="date-range" required />' +
        '</div>' +
        '</form>',
        buttons: {
            formSubmit: {
                text: '<span class="material-icons small valign">add</span>Crear Nueva Película</button>',
                btnClass: 'button btn-blue',
                action: function () {
                    function validURL(str) {
                        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                        return pattern.test(str);
                      }
                    var name = this.$content.find('#name').val();
                    var description = this.$content.find('#description').val();
                    var photo_url = this.$content.find('#photo-url').val();
                    var date_range = $('#date-range').data('daterangepicker');
                    if (date_range){
                        var start_date = date_range.startDate.format('DD-MM-YYYY'); 
                        var end_date = date_range.endDate.format('DD-MM-YYYY');
                    } else{
                        $.alert('Por favor ingrese un rango de fechas');
                        return false;
                    }
                    if(!name || !description || !photo_url){
                        $.alert('Por favor llena todos los campos');
                        return false;
                    }
                    if (description.length <=10){
                        $.alert('Por favor ingrese una sinopsis más larga');
                        return false;
                    }
                    if (!validURL(photo_url)){
                        $.alert('Por favor ingrese una url válida');
                        return false;
                    }
                    let newMovie = {"name": name, "description": description, "photo_url": photo_url, "start_date": start_date, "end_date": end_date}
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/api/v1/movies',
                        data: newMovie
                    })
                    .then(data=>console.log(data))
                    .catch(err=>console.log(err))
                    window.location.reload();
                    return newMovie
                }
            },
            cancel: function () {
                window.location.reload();
            },
        },
        onContentReady: function () {
            // bind to events
            var jc = this;
            this.$content.find('form').on('submit', function (e) {
                // if the user submits the form by pressing enter in the field.
                e.preventDefault();
                jc.$$formSubmit.trigger('click'); // reference the button and click it
                
            });
            $('input[name="daterange"]').daterangepicker({
               
                parentEl: '.jconfirm-row',
                autoApply: true
            }, function(start, end, label) {
            });
        }
    });
}


