function AS_FlexContainer_dc3fe647523e44f3a26ddc638f279e27(eventobject) {
    var self = this;
    if (this.view.lblPassword.top == "23%") {
        this.view.flxLblPassword.isVisible = false;
        this.invokeTouch(this.view.lblPassword, "16%");
    }
    this.view.forceLayout();
}