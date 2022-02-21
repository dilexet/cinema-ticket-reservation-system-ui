export const TostrConfigurations = {
    timeOut: 4000,
    newestOnTop: false,
    preventDuplicates: true,
    position: "top-right",
    getState: (state) => state.toastr,
    transitionIn: "fadeIn",
    transitionOut: "fadeOut",
    progressBar: true,
    closeOnToastrClick: true,
}