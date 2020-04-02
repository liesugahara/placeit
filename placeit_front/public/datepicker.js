function datepicker() {

    $('#date-filter').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    }
    );
    $('#date-filter').on('apply.daterangepicker', function(ev, picker) {
      var  start_date = picker.startDate.format('YYYY-MM-DD')
      var end_date = picker.endDate.format('YYYY-MM-DD')
    });
}

