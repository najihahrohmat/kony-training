function AS_FlexContainer_a591e39c2e8049eca3462c0dd8f91525(eventobject) {
    var self = this;
    if (this.view.lblUsername.top == "6%") {
        this.view.flxLblUsername.isVisible = false;
        this.invokeTouch(this.view.lblUsername, "-1%");
    }
    this.view.forceLayout();
}