function AS_FlexContainer_c46bcbf1f16048d7b909c8eac27e3517(eventobject) {
    var self = this;
    if (this.view.lblPassword.top == "23%") {
        this.view.flxLblPassword.isVisible = false;
        this.invokeTouch(this.view.lblPassword, "16%");
    }
    this.view.forceLayout();
}