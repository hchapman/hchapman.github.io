$(document).ready(function() {
    $(".solution").after(function() {
        var showbutton = document.createElement("button");
        var $self = $(this);
        showbutton.innerHTML = "Show solution";
        showbutton.classList.add("btn", "btn-outline-danger", "d-print-none");
        showbutton.classList.add("show-solution");
        var show = function(b) {
            $self.collapse("show");
            b.innerHTML = "Hide solution";
            b.classList.add("shown");
            $self.content_hidden = false;
        };
        var hide = function(b) {
            $self.collapse("hide");
            b.innerHTML = "Show solution";
            $self.content_hidden = true;
        };
        $self.content_hidden = true;
        $self.on('hidden.bs.collapse', function() { showbutton.classList.remove("shown"); });
        showbutton.addEventListener("click", function() {
            if ($self.content_hidden) {
                show(this);
            } else {
                hide(this);
            }
        });
        return showbutton;
    });
});
