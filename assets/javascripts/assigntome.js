$(document).ready(function() {
    console.log("assignToMe");
    Array.from(document.querySelectorAll('#issue_assigned_to_id')).forEach(elt => {
        if (elt.value == "") {
            elt.value = elt.querySelectorAll('option:not([value=""])')[0].getAttribute('value');
        }
    })
});
 

