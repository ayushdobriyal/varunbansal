gform.addFilter("gform_datepicker_options_pre_init",function(e,t,i,r){var o,d,s,n=window.gf_legacy_multi;return n&&n[t]&&"1"===n[t]?(o=window.jQuery,d=0<o("#preview_form_container").length,s="rtl"===window.getComputedStyle(r[0],null).getPropertyValue("direction"),Object.assign(e,{showOtherMonths:!1,beforeShow:function(e,t){return t.dpDiv[0].classList.remove("gform-theme-datepicker"),t.dpDiv[0].classList.add("gform-legacy-datepicker"),s&&d&&(e=o(e).closest(".gfield"),e=o(document).outerWidth()-(e.offset().left+e.outerWidth()),t.dpDiv[0].style.right=e+"px"),d&&t.dpDiv[0].classList.add("gform-preview-datepicker"),!this.suppressDatePicker}})):e},-10);