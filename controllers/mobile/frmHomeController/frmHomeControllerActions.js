define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FlexContainer0gcf00ae88d3744 **/
    AS_FlexContainer_fa80a66867124d4d8a560cb129522b7a: function AS_FlexContainer_fa80a66867124d4d8a560cb129522b7a(eventobject) {
        var self = this;

        function MOVE_ACTION____g1c01101a8ab4f1e86c5266198d8f73e_Callback() {
            self.view.flxMenuOverlay["isVisible"] = true;
        }
        function MOVE_ACTION____j1088ecb40894d348e17c5fc9114b6cc_Callback() {}
        function MOVE_ACTION____bf5be0968158413989e8155440dc56f5_Callback() {}
        function MOVE_ACTION____bdb5936ae6d74575a106c3aae0701a99_Callback() {}
        function MOVE_ACTION____cf3c29b061634117950fe0be28f915d7_Callback() {}
        function MOVE_ACTION____d7ee00f8ae5942e0af6ea29acebf0670_Callback() {}
        function MOVE_ACTION____a2684b93ce754f31bbeaedb3801c86a5_Callback() {}
        function MOVE_ACTION____f2a6f083586948759100e671175f88aa_Callback() {}
        self.view.flxHomeContent.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "80%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____g1c01101a8ab4f1e86c5266198d8f73e_Callback
        });
        self.view.HamburgerMenu.flxMenuUserInfo.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____f2a6f083586948759100e671175f88aa_Callback
        });
        self.view.HamburgerMenu.flxMenuOption1.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.1,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____a2684b93ce754f31bbeaedb3801c86a5_Callback
        });
        self.view.HamburgerMenu.flxMenuOption2.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.15,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____d7ee00f8ae5942e0af6ea29acebf0670_Callback
        });
        self.view.HamburgerMenu.flxMenuOption3.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.2,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____cf3c29b061634117950fe0be28f915d7_Callback
        });
        self.view.HamburgerMenu.flxMenuOption4.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.25,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____bdb5936ae6d74575a106c3aae0701a99_Callback
        });
        self.view.HamburgerMenu.flxMenuOption5.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.3,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____bf5be0968158413989e8155440dc56f5_Callback
        });
        self.view.HamburgerMenu.flxLogout.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.35,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____j1088ecb40894d348e17c5fc9114b6cc_Callback
        });
    },
    /** onSuccess defined for crdTravelAds **/
    AS_CordovaBrowser_e77ceca12f4046a4afd5810353860bf3: function AS_CordovaBrowser_e77ceca12f4046a4afd5810353860bf3(eventobject) {
        var self = this;
        this.setData();
    },
    /** onClick defined for flxLogout **/
    AS_FlexContainer_i7890e304521434fa4c0e3a6c85113fc: function AS_FlexContainer_i7890e304521434fa4c0e3a6c85113fc(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** onClick defined for flxMenuOverlay **/
    AS_FlexContainer_fd4bf78a3aca45e381be66082400e394: function AS_FlexContainer_fd4bf78a3aca45e381be66082400e394(eventobject) {
        var self = this;

        function MOVE_ACTION____iedf68a4e55d4fc2a6d200b35ee1e661_Callback() {
            self.view.flxMenuOverlay["isVisible"] = false;
        }
        function MOVE_ACTION____g07a10e20fbb4179b6f4e4e2880afd73_Callback() {}
        function MOVE_ACTION____hacd5858b7fb4a228de667e341c9b19a_Callback() {}
        function MOVE_ACTION____h2f55412a9674892bea980e767f19909_Callback() {}
        function MOVE_ACTION____h5a63127f00345369bce3bb7ee4cbc71_Callback() {}
        function MOVE_ACTION____c9ced23767cc4d1385a3b668e1f8f705_Callback() {}
        function MOVE_ACTION____d63d8f33dc4243ba9eaaf7983ba9281d_Callback() {}
        function MOVE_ACTION____d98c577998094dc3994840b99f957218_Callback() {}
        self.view.flxHomeContent.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": MOVE_ACTION____iedf68a4e55d4fc2a6d200b35ee1e661_Callback
        });
        self.view.HamburgerMenu.flxMenuUserInfo.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____d98c577998094dc3994840b99f957218_Callback
        });
        self.view.HamburgerMenu.flxMenuOption1.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.1,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____d63d8f33dc4243ba9eaaf7983ba9281d_Callback
        });
        self.view.HamburgerMenu.flxMenuOption2.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.15,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____c9ced23767cc4d1385a3b668e1f8f705_Callback
        });
        self.view.HamburgerMenu.flxMenuOption3.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.2,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____h5a63127f00345369bce3bb7ee4cbc71_Callback
        });
        self.view.HamburgerMenu.flxMenuOption4.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.25,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____h2f55412a9674892bea980e767f19909_Callback
        });
        self.view.HamburgerMenu.flxMenuOption5.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100px",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.3,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____hacd5858b7fb4a228de667e341c9b19a_Callback
        });
        self.view.HamburgerMenu.flxLogout.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0.35,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____g07a10e20fbb4179b6f4e4e2880afd73_Callback
        });
    }
});