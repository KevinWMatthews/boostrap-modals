$('#demoModal').on('show.bs.modal', function (e) {
    console.log('Modal was shown');
})

$('#demoModal').on('hidden.bs.modal', function (e) {
    console.log('Modal was hidden');
})
