function AS_FlexContainer_acde9ab5c9594fa5a8a8274340470633(eventobject) {
    var self = this;
    if (this.view.lblUsername.top == "6%") {
        this.view.flxLblUsername.isVisible = false;
        this.invokeTouch(this.view.lblUsername, "-1%");
    }
    this.view.forceLayout();
}